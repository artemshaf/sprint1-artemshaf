/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line import/no-extraneous-dependencies
import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { BOOK_PAGE } from '../../../../utils';
import { Button, Typography } from '../../../ui';
import { Rating } from '../../rating';

import DefaultImg from './images/default.png';
import { IBookItemInterface } from './book-item-interface';

import styles from './book-item.module.scss';

const Item = ({ variantDisplay = 'list', item, className, ...props }: IBookItemInterface) => {
  const navigate = useNavigate();

  if (variantDisplay === 'tile') {
    return (
      <li
        data-test-id='card'
        onClick={() => navigate(BOOK_PAGE)}
        className={classNames(styles.item, styles[`item_${variantDisplay}`], className)}
        {...props}
      >
        <Link to={`${BOOK_PAGE}`}>
          <img className={classNames(styles.img)} src={DefaultImg} alt='Book' />
        </Link>
        <div className={classNames(styles[`item_${variantDisplay}__info__wrapper`])}>
          <div className={classNames(styles[`item_${variantDisplay}__info__descr`])}>
            <Typography variant='subtitle-s' className={classNames(styles.name)}>
              Грокаем алгоритмы. Иллюстрированное пособие для програ...
            </Typography>
            <Typography variant='body-s' className={classNames(styles.author)}>
              Адитья Бхаргава, 2019
            </Typography>
          </div>
          <div className={classNames(styles[`item_${variantDisplay}__btn__wrapper`])}>
            <Rating isChanged={false} rate={3} className={classNames(styles.rating)} />
            {/* <Typography className={classNames(styles.rating)} variant='p'>
              ещё нет оценок 
            </Typography> */}
            <Button size='s' className={classNames(styles.btn)}>
              Забронировать
            </Button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li
      data-test-id='card'
      onClick={() => navigate(BOOK_PAGE)}
      className={classNames(styles.item, styles[`item_${variantDisplay}`], className)}
      {...props}
    >
      <Link to={`${BOOK_PAGE}`}>
        <Link to={`${BOOK_PAGE}`}>
          <img className={classNames(styles.img)} src={DefaultImg} alt='Book' />
        </Link>
        <div>
          <Rating isChanged={false} className={classNames(styles.rating)} />
          {/* <Typography className={classNames(styles.rating)} variant='p'>
            ещё нет оценок
          </Typography> */}
          <Typography variant='subtitle-s' className={classNames(styles.name)}>
            Грокаем алгоритмы. Иллюстрированное пособие для програ...
          </Typography>
          <Typography variant='body-s' className={classNames(styles.author)}>
            Адитья Бхаргава, 2019
          </Typography>
          <Button size='s' className={classNames(styles.btn)}>
            Забронировать
          </Button>
        </div>
      </Link>
    </li>
  );
};

export const BookItem = memo(Item);
