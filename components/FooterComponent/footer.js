import React from 'react';
import classes from './footer.module.css';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaBook } from 'react-icons/fa';
import PersonalCard from '../PersonalCard/personalcard';
import Image from 'next/image';
function Footer() {
  return (
    <div className={`${classes.footer} container`}>
      <div className={classes.logo_container}>
        <Image
          className='logo'
          src={'/assets/logotest.png'}
          alt={'logo De Candia Nicola'}
          title='logo dottor Nicola De Candia'
          height={200}
          width={200}
        />
      </div>
      <div className={classes.footer_contacts}>
        <h2 className={classes.footercontacts_title}>Contatti</h2>
        <ul className={classes.footer_list}>
          <li>
            <div className={classes.footer_address}>
              <ImLocation fill='rgb(39, 68, 148)' />
              <p>Via N.Dall&apos;Arca 19 Bari</p>
            </div>
          </li>
          <li>
            <div className={classes.footer_address}>
              <BsFillTelephoneFill fill='rgb(39, 68, 148)' />
              <a className={classes.phone_link} href='tel:080 5219334'>
                080 5219334
              </a>
            </div>
          </li>
          <li>
            <div className={classes.footer_address}>
              <MdEmail fill='rgb(39, 68, 148)' />
              <p>nicopa2000@yahoo.it</p>
            </div>
          </li>
          <li>
            <div className={classes.footer_address}>
              <FaBook fill='rgb(39, 68, 148)' />
              <p>PIVA: 06985120721</p>
            </div>
          </li>
        </ul>
      </div>
      <PersonalCard />
    </div>
  );
}

export default Footer;
