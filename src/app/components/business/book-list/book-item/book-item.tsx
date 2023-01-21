// eslint-disable-next-line import/no-extraneous-dependencies
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { BOOK_PAGE } from '../../../../utils';
import { Button, Typography } from '../../../ui';
import { Rating } from '../../rating';

import DefaultImg from './images/default.png';
import { IBookItemInterface } from './book-item-interface';

import styles from './book-item.module.scss';

const Item = ({ variantDisplay = 'list', item, className, ...props }: IBookItemInterface) => {
  if (variantDisplay === 'tile') {
    return (
      <li className={classNames(styles.item, styles[`item_${variantDisplay}`], className)} {...props}>
        <div>
          <Link to={`${BOOK_PAGE}`}>
            <img className={classNames(styles.img)} src={DefaultImg} alt='Book' />
          </Link>
        </div>
        <div className={classNames(styles[`item_${variantDisplay}__info__wrapper`])}>
          <div className={classNames(styles[`item_${variantDisplay}__info__descr`])}>
            <Typography className={classNames(styles.name)}>
              Грокаем алгоритмы. Иллюстрированное пособие для програ...
            </Typography>
            <Typography className={classNames(styles.author)}>Адитья Бхаргава, 2019</Typography>
          </div>
          <div className={classNames(styles[`item_${variantDisplay}__btn__wrapper`])}>
            {item.rating ? (
              <Rating rate={3} className={classNames(styles.rating)} />
            ) : (
              <Typography className={classNames(styles.rating)} variant='p'>
                ещё нет оценок
              </Typography>
            )}
            <Button size='s' className={classNames(styles.btn)}>
              Забронировать
            </Button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={classNames(styles.item, styles[`item_${variantDisplay}`], className)} {...props}>
      <div>
        <Link to={`${BOOK_PAGE}`}>
          <img className={classNames(styles.img)} src={DefaultImg} alt='Book' />
        </Link>
      </div>
      <div>
        {item.rating ? (
          <Rating className={classNames(styles.rating)} />
        ) : (
          <Typography className={classNames(styles.rating)} variant='p'>
            ещё нет оценок
          </Typography>
        )}
        <Typography className={classNames(styles.name)}>
          Грокаем алгоритмы. Иллюстрированное пособие для програ...
        </Typography>
        <Typography className={classNames(styles.author)}>Адитья Бхаргава, 2019</Typography>
        <Button size='s' className={classNames(styles.btn)}>
          Забронировать
        </Button>
      </div>
    </li>
  );
};

export const BookItem = memo(Item);
