import classes from './slide.module.css';
import Button from '../Button/button';
import { motion, AnimatePresence } from 'framer-motion';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
function SlideShow() {
  const router = useRouter();
  const clickHandler = (e) => {
    e.preventDefault();
    router.push('/contatti');
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.slider}>
      <Image
        alt='foto studio Nicola De Candia Bari'
        src={'/assets/DSC073223.jpg'}
        title='foto Dottore Nicola De Candia'
        layout='fill'
        objectFit='cover'
      />
      <div className={classes.herotext}>
        <div className={classes.heroheadingbox}>
          <h1 className={classes.hero_heading}>Dott. Nicola De Candia</h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 4, delay: 0.8 }}
            className={classes.underline}
          ></motion.div>
        </div>
        <motion.div
          className={classes.sliderspecialities}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <h2 className={classes.sliderspec}>
            Specialista in OtorinoLaringoiatria
          </h2>
          <h2 className={classes.sliderspec}>Specialista in NeuroChirurgia</h2>
        </motion.div>

        <Button className={classes.bigbtn} type='stroke' onClick={clickHandler}>
          Contattaci
        </Button>
      </div>
    </div>
  );
}

export default SlideShow;
