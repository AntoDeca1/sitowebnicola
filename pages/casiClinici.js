import Head from 'next/head';
import classes from '../styles/casiClinici.module.css';
function CasiCliniciPage() {
  return (
    <section className={classes.casiClinici_section}>
      <Head>
        <title>Casiclinici-otorinodecandia</title>
        <meta
          name='description'
          content='casi clinici incontrati dal dottore'
        ></meta>
      </Head>
      <div className='container'>
        <div className={classes.casiClinici_header}>
          <h1 className={classes.casiClinici_title}>
            <span className='color'>Casi</span> Clinici
          </h1>
          <p>Alcuni casi clinici eseguiti dal dott. Nicola De Candia.</p>
        </div>
        <div className={classes.video_box}>
          <h2 className={classes.videobox_title}>
            <span className='color'>Settoplastica</span> Endoscopica
          </h2>
          <div className={classes.video}>
            <video controls width={'100%'} poster='/assets/DSC07325.jpg'>
              <source src={'assets/poliposi.mp4'} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className={classes.video_box}>
          <h2 className={classes.videobox_title}>
            <span className='color'>Poliposi</span> nasale
          </h2>
          <div className={classes.video}>
            <video controls width={'100%'} poster='/assets/DSC07325.jpg'>
              <source src={'/assets/settoplastica.mp4'} type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasiCliniciPage;
