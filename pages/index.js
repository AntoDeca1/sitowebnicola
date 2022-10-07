import { useInView } from 'react-intersection-observer';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button/button';
import SkillsComponent from '../components/home/SkillsComponent/skillscomponent';
import SlideShow from '../components/SlideShow/slide';
import classes from '../styles/Home.module.css';
import Hero from '../components/home/HeroComponent/herocomponent';

export default function Home() {
  const { ref: heroRef, inView: heroVisible } = useInView();
  const { ref: skillsRef, inView: skillsVisibile } = useInView();
  return (
    <>
      <section className={classes.slider_section}>
        <Head>
          <title>Home-otorinodecandia</title>
          <meta
            name='description'
            content='homepage of doctor Nicola De Candia'
          ></meta>
        </Head>
        <SlideShow />
      </section>
      <section
        className={`${classes.hero_section} ${
          heroVisible === true ? '' : 'section-hidden-left'
        }`}
        ref={heroRef}
      >
        <Hero />
      </section>
      <section
        className={`${classes.skills_section} ${
          skillsVisibile === true ? '' : 'section-hidden-bottom'
        }`}
        ref={skillsRef}
      >
        <SkillsComponent />
      </section>
    </>
  );
}
