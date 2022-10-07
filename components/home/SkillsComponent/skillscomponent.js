import React from 'react';
import Card from '../../Card/card';
import classes from './skills.component.module.css';
import { GoCheck } from 'react-icons/go';
function SkillsComponent() {
  return (
    <div className={classes.skills_box_container}>
      <h2 className={classes.skills_box_title}>
        <span className='color'>Patologie</span> trattate
      </h2>
      <div className={classes.card_container}>
        <Card
          title={'Naso'}
          type='pat'
          image={'/assets/nose.png'}
          list={[
            'Ostruzione nasale',
            'Rinite vasomotoria',
            'Poliposi nasale',
            'Ipertrofia dei turbinati',
            'Ipertrofia adenoide e tonsillare',
            'OSAS',
            'Sinusite',
            ' Mucocele',
            'Varici settali-epistassi',
            'Deviazione del setto nasale',
            'Tumori benigni e maligni (papilloma invertito, osteoma, etc.)',
          ]}
        />
        <Card
          type='pat'
          title={'Orecchio'}
          image={'/assets/ear.png'}
          list={[
            'perforazione della membrana timpanica',
            'otite cronica',
            'otosclerosi',
            'otosclerosi',
            'otosclerosi',
            'sindrome di Meniere',
            'sindrome vertiginosa - cupololitiasi',
          ]}
        />
        <Card
          type='pat'
          title={'Collo'}
          image={'/assets/throat.png'}
          list={[
            'Polipi, noduli, prolassi delle corde vocali',
            'Discheratosi e neoformazioni maligne del laringe',
            'Tumefazioni del collo',
            'Adenomi, calcolosi ghiandole salivari',
          ]}
        />
        <Card
          title={'Esami Clinici'}
          image={'/assets/test.png'}
          type='exam'
          icon={GoCheck}
          list={[
            'esame audiometrico ',
            'esame impedenzometrico',
            'prove vestibolari',
            'otoendoscopia',
            'fibroscopia laringea',
            'microscopia auricolare',
            'endoscopia nasale',
            ' endoscopia laringea',
          ]}
        />
      </div>
    </div>
  );
}

export default SkillsComponent;
