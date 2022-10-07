import React from 'react';
import classes from './personalcard.module.css';
import Image from 'next/image';
import Button from '../Button/button';
import { useRouter } from 'next/router';
function PersonalCard() {
  const router = useRouter();
  const gotoContatti = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    router.push('/contatti');
  };
  return (
    <div className={classes.personalCard}>
      <div className={classes.personalCard_content}>
        <Image
          className={classes.nic_img}
          src={'/assets/papa.png'}
          width={94}
          height={140}
          alt={'logo'}
        />
        <h2 className={classes.personalCard_header}>
          {' '}
          <span className='color'>Dott.</span>Nicola De Candia
        </h2>
        <Button type='stroke' onClick={gotoContatti}>
          Prenota una visita
        </Button>
      </div>
    </div>
  );
}

export default PersonalCard;
