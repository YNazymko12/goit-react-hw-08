import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';
import css from './Layout.module.css';
// import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar className={css.barContainer} />
      <main className={css.pageContainer}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
