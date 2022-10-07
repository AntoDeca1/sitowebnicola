import classes from '../styles/contatti.module.css';
import { ImLocation } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillClockCircle } from 'react-icons/ai';
import { Head } from 'next/head';
function ContactPage() {
  return (
    <section className={classes.contact_section}>
      <Head>
        <title>Contatti-otorinodecandia</title>
        <meta
          name='description'
          content='come contattare il dottore Nicola De Candia'
        ></meta>
      </Head>
      <div className={`container ${classes.address_container}`}>
        <div className={classes.contacts}>
          <h2 className={classes.contacts_title}>Indirizzo</h2>
          <ul className={classes.contacts_list}>
            <li>
              <div className={classes.contacts_address}>
                <ImLocation fill='rgb(39, 68, 148)' />
                <p>Via N.Dall&apos;Arca 19 Bari</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.contacts}>
          <h2 className={classes.contacts_title}>Orari</h2>
          <ul className={classes.contacts_list}>
            <li>
              <div className={classes.contacts_address}>
                <AiFillClockCircle fill='rgb(39, 68, 148)' />
                <ul className={classes.hours_list}>
                  <li className={classes.hour}>
                    <p>LUNEDI</p>
                    <p> 16:00-20:00</p>
                  </li>
                  <li className={classes.hour}>
                    <p>MERCOLEDI</p>
                    <p> 16:00-20:00</p>
                  </li>
                  <li className={classes.hour}>
                    <p>VENERDI</p>
                    <p> 16:00-20:00</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.contacts}>
          <h2 className={classes.contacts_title}>Contatti</h2>
          <ul className={classes.contacts_list}>
            <li>
              <div className={classes.contacts_address}>
                <BsFillTelephoneFill fill='rgb(39, 68, 148)' />
                <a className={classes.phone_link} href='tel:080 5219334'>
                  080 5219334
                </a>
              </div>
            </li>
            <li>
              <div className={classes.contacts_address}>
                <BsFillTelephoneFill fill='rgb(39, 68, 148)' />
                <a className={classes.phone_link} href='tel:+39 330786177 '>
                  +39 330786177
                </a>
              </div>
            </li>
            <li>
              <div className={classes.contacts_address}>
                <MdEmail fill='rgb(39, 68, 148)' />
                <p>nicopa2000@yahoo.it</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.map}>
        <iframe
          width='100%'
          height='500'
          id='gmap_canvas'
          src="https://maps.google.com/maps?q=Via%20N.%20dall'Arca%2019%20,Bari&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
          title='Mappa Studio Dottor De Candia'
        ></iframe>
      </div>
      <div className={`container ${classes.howtoreach_container}`}>
        <h1 className={classes.howtoreach_bigtitle}>
          Come raggiungere lo studio
        </h1>
        <p className={classes.description}>
          Lo studio del dott. De Candia è situato nel centro di Bari a pochi
          metri dalla Stazione ferroviaria. Coordinate geografiche: 41.119438 -
          16.870731
        </p>
        <div className={classes.carhowto}>
          <h2 className={classes.howtoreach_title}>Auto</h2>
          <ul className={classes.howtoreach_list}>
            <li>
              Dalla SS16 prendere l&apos;uscita 4 direzione &quot;via
              Napoli&quot;;
            </li>
            <li>percorrere tutta via Napoli;</li>
            <li>
              alla fine della strada girare obbligatoriamente a destra in via
              Latilla;
            </li>
            <li>proseguire dritto per tuttia via Quintino Sella;</li>
            <li>
              dopo quasi 1 km, prima del sottopassaggio, svoltare a sinistra per
              Corso Italia;
            </li>
            <li>proseguire dritto fino in Piazza Aldo Moro;</li>
            <li>
              superata la fontana, svoltare a sinistra in via N. dall&apos;Arca
              (dove si trova lo studio).
            </li>
          </ul>
          <p>
            Si consiglia di posteggiare la propria auto nel comodo Gestipark di
            Piazza Umberto I, con accesso da via S. Crisanzio (tariffa oraria: €
            1,50). In alternativa è possibile lasciare la propria auto per
            strada, nelle strisce blu, avendo cura di pagare il ticket (tariffa
            oraria: € 2,00)
          </p>
        </div>
        <div className={classes.mezzipublicihowto}>
          <h2 className={classes.howtoreach_title}>Mezzi Publici</h2>
          <p>
            È possibile raggiungere lo studio del dott. De Candia con le
            seguenti linee AMTAB (fermata Piazza Aldo Moro): 2, 3, 6, 7, 11,
            11/, 12, 12/, 13, 14, 16, 19, 20, 20/, 21, 22, 27, 30, 53, 71, E.
          </p>
          <ul className={classes.howtoreach_list}>
            <li>attraversare Piazza Aldo Moro;</li>
            <li>
              percorrere via Nicolò dall&apos;Arca fino al civico 19 (lato
              sinistro della strada).
            </li>
          </ul>
        </div>
        <div className={classes.trenohowto}>
          <h2 className={classes.howtoreach_title}>Treno</h2>
          <p>
            È possibile raggiungere lo studio del dott. De Candia con Ferrovie
            dello Stato - Trenitalia, Ferrovie del Nord Barese (Ferrotramviaria)
            e Ferrovie Sud Est (Ferrovie Appulo Lucane) fermata &quot;Bari
            centrale&quot;.
          </p>
          <ul className={classes.howtoreach_list}>
            <li>attraversare Piazza Aldo Moro;</li>
            <li>
              percorrere via Nicolò dall&apos;Arca fino al civico 19 (lato
              sinistro della strada).
            </li>
          </ul>
        </div>
        <div className={classes.areohowto}>
          <h2 className={classes.howtoreach_title}>Aereo</h2>
          <p>Dall&apos;aeroporto Karol Wojtyla prendere:</p>
          <ul className={classes.howtoreach_list}>
            <li>il bus navetta Tempesta (€ 4,00) per Piazza Aldo Moro;</li>
            <p>oppure</p>
            <li>
              il treno per Bari con fermata &quot;Bari - Centrale&quot; (€
              5,00).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
