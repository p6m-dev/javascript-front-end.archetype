import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text } from '@nax-tech/components-web';
import { useTranslation } from '@nax-tech/i18n';
import { withAuth, isAuthenticated, AuthState } from '@nax-tech/auth';
import { withUser, isLoaded, UserState } from '@{{package-name}}/context';
import { compose } from '@nax-tech/utils-components';
import { Layout } from '@{{package-name}}/components-web';
import { routes } from '@{{package-name}}/constants';

interface Props {
  authState: AuthState;
  userState: UserState;
}

const Component: FC<Props> = ({
  userState: { user },
  authState: { authUser, logout },
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout
      avatar={user?.firstName ? user.firstName.substring(0, 1) : ''}
      onProfile={() => navigate(routes.PROFILE.path)}
      onLogout={logout}
    >
      <Text type="head-1">{t('profile.title')}</Text>
      <Text type="default">{authUser?.email}</Text>
      <Text type="default">
        {user?.firstName} {user?.lastName}
      </Text>
    </Layout>
  );
};

export const Profile = compose(
  withAuth(isAuthenticated),
  withUser(isLoaded)
)(Component);
