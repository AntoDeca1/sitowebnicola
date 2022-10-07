import classes from './hero.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../../Button/button';
function Hero() {
  const router = useRouter();
  const gotoAbout = (e) => {
    e.preventDefault();
    router.push('/about');
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${classes.hero} container`}>
      <div className={classes.hero_content}>
        <div className={classes.hero_content_text}>
          <h2 className={classes.hero_title}>
            <span className={classes.color}>Dott</span>.Nicola De Candia
          </h2>
          <p className={classes.hero_subtitle}>
            Otorino Laringoiatra-NeuroChirurgo
          </p>
        </div>
        <p className={classes.hero_description}>
          Il <span className={classes.color}>Dott. Nicola De Candia</span> si è
          iscritto nell &apos; anno accademico 1981/82 alla Facoltà di Medicina
          e Chirurgia dell&apos; Università di Bari, laureandosi in corso nella
          stessa sede il 13/11/1987, riportando la votazione di{' '}
          <span className='color'>110/110 e lode</span>.
          <br />
          <br />
          Nel 1992 è risultato <span className={classes.color}>
            vincitore
          </span>{' '}
          del concorso nazionale bandito dal Gruppo Italiano per lo studio della
          farmacologia della vertigine (GISFaV) per l&apos;assegnazione di una
          borsa di studio con il progetto di ricerca dal titolo:
          <span className='color'>
            ”La Diidroergocristina nel trattamento dei disturbi
            dell&apos;integrazione visuo-spaziale dell&apos;anziano”
          </span>
          ; dal 23/7/1993 al 5/9/1993 ha partecipato al “Visiting
          Phisician&apos;s program” presso l&apos;
          <span className='color'>
            House Ear Institute in Los Angeles (USA)
          </span>
          ;
        </p>
        <Button type='stroke' onClick={gotoAbout}>
          Scopri di più
        </Button>
      </div>
      <div className={classes.hero_imagebox}>
        <Image
          className={classes.hero_image}
          alt='foto dottore Nicola De Candia Bari'
          src={'/assets/papa.png'}
          title='foto Dottore Nicola De Candia'
          width={454}
          height={681}
        />
      </div>
    </div>
  );
}

export default Hero;
