import {
  createContext,
  FC,
  useMemo,
  useReducer,
  useEffect,
  useContext,
} from 'react';
import produce from 'immer';
import { GQLError } from '@p6m-dev/clients-graphql';
import { User } from '@{{package-name}}/models';
import {
  getUser as getUserSvc,
  updateUser as updateUserSvc,
} from '@{{package-name}}/services';

/**
 * The User state property been injected to a component using withUser HOC.
 * @example
 * interface Props {
 *  userState: UserState;
 * }
 */
export interface UserState {
  isLoading: boolean;
  user?: User;
  error?: GQLError | Error;
  updateUser: (mutationFn: (user: User) => void) => Promise<User | undefined>;
}

const initialState: UserState = {
  isLoading: true,
  updateUser: async (mutationFn: (user: User) => void) => {
    console.warn('No User provider found');
    return {} as User;
  },
};

const UserContext = createContext(initialState);

enum DispatchTypes {
  SET_LOADING,
  SET_USER,
  SET_ERROR,
}

interface DispatchProps {
  type: DispatchTypes;
  payload: unknown;
}

const reducer = (state: UserState, { type, payload }: DispatchProps) => {
  switch (type) {
    case DispatchTypes.SET_LOADING:
      return {
        ...state,
        isLoading: payload as boolean,
      };
    case DispatchTypes.SET_USER:
      return {
        ...state,
        user: payload as User,
      };
    case DispatchTypes.SET_ERROR:
      return {
        ...state,
        error: payload as GQLError,
      };
    default:
      return state;
  }
};

interface UserProviderProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
}

export const UserProvider: FC<UserProviderProps> = ({
  children,
  isAuthenticated,
}) => {
  const [userState, dispatch] = useReducer(reducer, initialState);
  const { user } = userState;

  const loadUser = async () => {
    try {
      const response = await getUserSvc();
      dispatch({ type: DispatchTypes.SET_USER, payload: response });
    } catch (error) {
      dispatch({ type: DispatchTypes.SET_ERROR, payload: error });
    } finally {
      dispatch({ type: DispatchTypes.SET_LOADING, payload: false });
    }
  };

  /**
   * Update a user without updating the state. Save result to the state with setUser, if needed.
   * @param mutationFn - user mutation function
   * @returns User
   * @example
   * const { updateUser } = userState;
   * const updatedUser = await updateUser(user => {user.firstName = 'New Name'});
   */
  const updateUser = async (mutationFn: (user: User) => void) => {
    const updatedUser = user ? produce(user, mutationFn) : undefined;
    if (updatedUser) {
      const response = await updateUserSvc(updatedUser);
      dispatch({ type: DispatchTypes.SET_USER, payload: response });
      return response;
    }
    return user;
  };

  useEffect(() => {
    if (isAuthenticated && !user) {
      loadUser();
    } else if (isAuthenticated === undefined) {
      loadUser();
    }
  }, [isAuthenticated]);

  const providerValue = useMemo(
    () => ({
      ...userState,
      updateUser,
    }),
    [userState]
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * HOC to provide a UserContext
 * @returns JSX.Element
 * @example export default compose(withUserProvider)(App);
 */
export const withUserProvider = (Component: FC) => () => {
  return (
    <UserProvider>
      <Component />
    </UserProvider>
  );
};

interface UserContextProps {
  userState: UserState;
}

/**
 * HOC to consume a User Context. Injects userState property into component's properties.
 * Use it with any component under the component level where withUserProvider was used.
 * @returns JSX.Element
 * @example export default withUser(MyComponent);
 */
export const withUser =
  <P extends UserContextProps>(condition: (userState: UserState) => boolean) =>
  (Component: FC<P>) =>
  (props: P) => {
    return (
      <UserContext.Consumer>
        {(context) =>
          condition(context) ? (
            <Component {...props} userState={context} />
          ) : null
        }
      </UserContext.Consumer>
    );
  };

export default withUser;

// Custom hook to access the user object
export const useUser = () => useContext(UserContext);

/**
 * HOC condition to return nested component when user was loaded
 * @returns JSX.Element
 * @example export default withUser(isLoaded)(MyComponent);
 */
export const isLoaded = (userState: UserState) => !userState.isLoading;

/**
 * HOC condition to always return nested component
 * @returns JSX.Element
 * @example export default withUser(always)(MyComponent);
 */
export const always = () => true;
