import React from 'react';
import classes from './card.module.css';
import { TiTick } from 'react-icons/ti';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Card({ image, title, list, type, Icon }) {
  return (
    <div className={`${classes.card} ${classes[type]}`}>
      <h2 className={classes.card_title}>{title}</h2>
      <Image
        src={image}
        alt={image}
        title={title}
        width={40}
        height={40}
        className={classes.card_img}
      ></Image>
      <div className={classes.card_content}>
        <ul
          className={`${classes.card_list} ${
            type === 'exam' ? classes.card_list_exam : ''
          } `}
        >
          {list.map((el, index) => {
            return (
              <li className={classes.list_item} key={index}>
                {type === 'exam' && <TiTick className={classes.card_icon} />}
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;
