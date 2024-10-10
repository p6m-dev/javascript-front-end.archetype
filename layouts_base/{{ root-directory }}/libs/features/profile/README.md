# User Profile Feature Example

This is an example of a feature implementation.

## Usage

1. Wrap your application with UserProvider:

User context handles fetching a user from API based on the authentication access token, thus, you need to provide isAuthentication attribute to it.

```javascript
// app/<app_name>/src/pages/router.tsx

import { UserProvider } from '@{{package-name}}/context';
import { useAuth } from '@p6m-dev/auth';
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

2. Now you can add a feature under a route:

```javascript
// app/<app_name>/src/pages/router.tsx

import { Profile } from '@{{package-name}}/features-profile';
...
<Routes>
  <Route path="/profile" element={<Profile />} />
</Routes>
```
