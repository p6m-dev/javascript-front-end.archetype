import { FC } from 'react';
import { withAuth, isAuthenticated } from '@nax-tech/auth';
import { useTranslation } from '@nax-tech/i18n';
import { compose } from '@nax-tech/utils-components';
import { withUser, isLoaded, UserState } from '@{{package-name}}/context';
import { UserForm } from '../../components';

interface Props {
  userState: UserState;
}

const Component: FC<Props> = ({ userState: { user, updateUser } }) => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto max-w-3xl">
      <UserForm
        title={t('user_form.title')}
        object={user}
        labels={{'{'}}{
          firstName: t('user_form.labels.firstName'),
          lastName: t('user_form.labels.lastName'),
          submit: t('user_form.labels.submit'),
        }}
        placeholders={{'{'}}{ firstName: t('user_form.placeholders.firstName') }}
        errorMessages={{'{'}}{ firstName: t('user_form.errors.firstName') }}
        successMessage={t('user_form.success_message')}
        errorMessage={t('user_form.error_message')}
        onUpdate={updateUser}
      />
    </div>
  );
};

export const Default = compose(
  withAuth(isAuthenticated),
  withUser(isLoaded)
)(Component);
