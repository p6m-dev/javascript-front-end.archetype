# User Context Example

This is an example of a user context.

## Usage

Follow the steps in order to integrate this context to you app:

1. Wrap your application with UserProvider:

User context handles fetching a user from API based on the authentication access token, thus, you need to provide isAuthentication attribute to it.

```javascript
// app/<app_name>/src/pages/router.tsx

import { UserProvider } from '@{{package-name}}/context';
import { useAuth } from '@p6m-tech/auth';
...
const Router: FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <UserProvider isAuthenticated={isAuthenticated}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserProvider>
  );
};
```

2. Now you can pull user data using `useUser` hook.

```javascript
import { useUser, isLoaded } from '@{{package-name}}/context';
...
const { user } = useUser();
...
<p>{user?.firstName}</p>
```

3. You can also use HOC (Hire Order Component) in order to conditionally load your component:

```javascript
import { withUser, UserState } from '@{{package-name}}/context';
import { compose } from '@p6m-tech/utils-components';
...

interface Props {
    userState: UserState;
}

const MyComponent: FC<Props> = ({ userState: { user } }) => {
    return <p>{user.firstName}</p>;
};

export default compose(withUser(isLoaded))(MyComponent);
```
