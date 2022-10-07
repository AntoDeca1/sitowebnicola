import { useInView } from 'react-intersection-observer';
import classes from '../styles/Interventi.module.css';
import Image from 'next/image';
import Head from 'next/head';
function InterventiChirurgigiPage() {
  const { ref: interventiRef, inView: interventiVisible } = useInView();
  return (
    <section
      className={`${classes.interventi_section} ${
        interventiVisible === true ? '' : 'section-hidden-bottom'
      }`}
      ref={interventiRef}
    >
      <Head>
        <title>Interventi-otorinodecandia</title>
        <meta
          name='description'
          content='interventi svolti dal dottore Nicola De Candia'
        ></meta>
      </Head>
      <div className={`container ${classes.interventi_container}`}>
        <div className={classes.animation_box}>
          <Image
            className='aboutme-img'
            src={'/assets/surge.png'}
            alt={'surgeon working on a patient'}
            width={561}
            height={561}
          ></Image>
        </div>
        <div className={classes.interventi_text}>
          <h2 className={classes.interventi_title}>
            <span className='color'>Interventi</span> Chirurgici
          </h2>
          <p>
            Principali interventi chirurgici effettuati dal dott. Nicola De
            Candia:
          </p>
          <ul className={classes.interventi_list}>
            <li>Miringo/timpanoplastica</li>
            <li>Stapedectomia</li>
            <li>FESS (functional endoscopic sinus surgery)</li>
            <li>
              Decongestione turbinati, turbinoplastica con
              laser-debrider-radiofrequenza
            </li>
            <li>Polipotomia nasale con laser-debrider</li>
            <li>Settoplastica endoscopica</li>
            <li>Adenoidectomia endoscopica</li>
            <li>Tonsillectomia</li>
            <li>Causticazione con laser di varici settali</li>
            <li>Uvulopalatoplastica</li>
            <li>Microlaringoscopia</li>
            <li>Parotidectomia</li>
            <li>Asportazione gh. Sottomandibolare</li>
            <li>Plastica durale</li>
            <li>Dacriocistorinostomia (chirurgia delle vie lacrimali)</li>
            <li>Asportazione adenoma ipofisi</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default InterventiChirurgigiPage;
