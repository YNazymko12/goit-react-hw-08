import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import phonebookImg from '../../assets/image/phonebook.png';

import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homeContainer}>
      <DocumentTitle>Home Page</DocumentTitle>
      <h1 className={css.title}>
        This application created to save your contacts in one place{' '}
      </h1>
      <img
        src={phonebookImg}
        alt="Phonebook image"
        width="360px"
        height="400px"
      />
    </div>
  );
};

export default HomePage;
