import React from 'react';

import NavBar from './NavBarComponent/navbar';
import Footer from './FooterComponent/footer';
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <section className='footer_section'>
        <Footer />
      </section>
    </>
  );
}
