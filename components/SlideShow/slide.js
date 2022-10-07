import classes from './slide.module.css';
import Button from '../Button/button';
import { motion, AnimatePresence } from 'framer-motion';
import Router, { useRouter } from 'next/router';
function SlideShow() {
  const router = useRouter();
  const clickHandler = (e) => {
    e.preventDefault();
    router.push('/contatti');
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.slider}>
      <AnimatePresence>
        <motion.div
          className={classes.herotext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className={classes.heroheadingbox}>
            <h1 className={classes.hero_heading}>Dott. Nicola De Candia</h1>
            <AnimatePresence>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 4, delay: 1.1 }}
                className={classes.underline}
              ></motion.div>
            </AnimatePresence>
          </div>
          <div className={classes.sliderspecialities}>
            <h2 className={classes.sliderspec}>
              Specialista in OtorinoLaringoiatria
            </h2>
            <h2 className={classes.sliderspec}>
              Specialista in NeuroChirurgia
            </h2>
          </div>

          <Button
            className={classes.bigbtn}
            type='stroke'
            onClick={clickHandler}
          >
            Contattaci
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SlideShow;
