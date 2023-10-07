import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';

function Layout() {
  return (
    <>
      <Navigation />

      <Outlet />

      <ScrollToTop
        smooth
        component={<img src={'/assets/to-top.png'} alt="top" />}
      />
      <Footer />
    </>
  );
}

export default Layout;
