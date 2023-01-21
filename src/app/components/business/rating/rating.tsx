import { useState } from 'react';
import classNames from 'classnames';

import { Icon } from '../../ui';

import { IRatingInterface } from './rating-interface';

import styles from './rating.module.scss';

export const Rating = ({ rate = 4, isChanged = true, className, ...props }: IRatingInterface) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(0);

  const onClick = (index: number) => {
    if (!isChanged) return;

    setRating(index + 1);
  };

  const onMouseEnter = (index: number) => {
    if (!isChanged) return;

    setHover(index + 1);
  };

  const onMouseLeave = () => {
    if (!isChanged) return;

    setHover(rating);
  };

  return (
    <ul className={classNames(styles.rating, className)} {...props}>
      {[...Array(5)].map((star, index) => {
        const key = Math.floor(Math.random() * 100000000000);

        return (
          <li key={key}>
            <button
              type='button'
              className={classNames(styles.button, {
                [styles.notChanged]: !isChanged,
              })}
              onClick={() => onClick(index)}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave()}
            >
              <Icon icon={index < (hover || rating) ? 'StarFull' : 'StarEmpty'} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
