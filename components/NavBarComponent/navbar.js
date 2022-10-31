import classes from './navbar.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ImCross } from 'react-icons/im';
import { FaBars } from 'react-icons/fa';
function NavBar() {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const [mobile, setMobile] = useState(false);

  const handleClick = () => {
    setMobile(!mobile);
  };

  useEffect(() => {
    console.log(router.pathname);
    setActive(router.pathname);
  }, [router.pathname]);

  const navigateFunction = (path) => {
    router.push(path);
    window.scrollTo(0, 0);
  };

  const gotoHome = (e) => {
    e.preventDefault();
    navigateFunction('/');
    setMobile(!mobile);
  };
  const gotoAbout = (e) => {
    e.preventDefault();
    navigateFunction('/about');
    setMobile(!mobile);
  };
  const gotoInterventi = (e) => {
    e.preventDefault();
    navigateFunction('/interventi');
    setMobile(!mobile);
  };
  const gotoContatti = (e) => {
    e.preventDefault();
    navigateFunction('/contatti');
    setMobile(!mobile);
  };
  const gotoCasiClinici = (e) => {
    e.preventDefault();
    navigateFunction('/casiClinici');
    setMobile(!mobile);
  };

  return (
    <header className={classes.nav}>
      <nav className={`${classes.navbar} ${mobile && classes.navbar_mobile}`}>
        <div
          className='logowrapper'
          onClick={() => {
            navigateFunction('/');
          }}
        >
          <Image
            className='logo'
            src={'/assets/logotest.png'}
            alt={'logo Dottore Nicola De Candia Bari'}
            title='logo'
            width={120}
            height={120}
          ></Image>
        </div>
        <ul
          className={`${classes.navbar_list} ${
            mobile ? `${classes.navbar_active}` : `${classes.navbar_close}`
          }`}
        >
          <li onClick={gotoHome}>
            <a
              href='##'
              className={`${classes.navbar_link} ${
                active === '/' ? `${classes.on}` : ''
              }`}
            >
              Home
            </a>
          </li>
          <li onClick={gotoAbout}>
            <a
              href='##'
              className={` ${classes.navbar_link} ${
                active === '/about' ? `${classes.on}` : ''
              }`}
            >
              AboutMe
            </a>
          </li>
          <li onClick={gotoInterventi}>
            <a
              href='##'
              className={` ${classes.navbar_link} ${
                active === '/interventi' ? `${classes.on}` : ''
              }`}
            >
              Interventi
            </a>
          </li>
          <li onClick={gotoCasiClinici}>
            <a
              href='##'
              className={` ${classes.navbar_link} ${
                active === '/casiClinici' ? `${classes.on}` : ''
              }`}
            >
              Casi Clinici
            </a>
          </li>
          <li onClick={gotoContatti}>
            <a
              href='##'
              className={` ${classes.navbar_link} ${
                active === '/contatti' ? `${classes.on}` : ''
              }`}
            >
              Contatti
            </a>
          </li>
        </ul>
        <button
          className={classes.nav_btn}
          onClick={handleClick}
          aria-label='closeNavBar'
        >
          {mobile ? (
            <ImCross className={classes.icon} />
          ) : (
            <FaBars className={classes.icon} />
          )}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
