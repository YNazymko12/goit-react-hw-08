import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={css.formContainer}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
