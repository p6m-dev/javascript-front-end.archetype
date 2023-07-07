import {
  DefaultContext,
  gqlPromise,
  mutationPromise,
} from '@nax-tech/clients-graphql';
import { User } from '@{{package-name}}/models';

/**
 * Get a user by id
 * @param id string
 * @param context: reference to the AbortController used to abort the call (optional)
 * @returns Promise<User>
 * @example const customer = await getCustomer(customerId);
 */
export const getUser = async (
  context?: DefaultContext
): Promise<User | undefined> => {
  const response = (await gqlPromise(
    {
      name: 'user',
      query: `
      query user {
        user {
          id
          firstName
          lastName
        }
      }
    `,
    },
    context
  )) as User;
  return response;
};

/**
 * Updates an existing user.
 * @param user - User object
 * @param context: reference to the AbortController used to abort the call (optional)
 * @returns Promise<User>
 * @example await updateCustomer(customer);
 */
export const updateUser = async (
  user: User,
  context?: DefaultContext
): Promise<User> => {
  const response = (await mutationPromise(
    {
      name: 'updateUser',
      query: `
      mutation updateUser($user: UserInput!) {
        updateUser(user: $user) {
          id
          firstName
          lastName
        }
      }
    `,
    },
    {
      user: user,
    },
    context
  )) as User;
  return response;
};
