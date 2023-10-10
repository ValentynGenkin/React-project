import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';

import '../CSS/ScrollToTop.css';

function Layout() {
  return (
    <>
      <Navigation />

      <Outlet />

      <ScrollToTop
        className="scroll-btn"
        smooth
        component={<img src={'/assets/to-top.png'} alt="top" />}
      />
      <Footer />
    </>
  );
}

export default Layout;
