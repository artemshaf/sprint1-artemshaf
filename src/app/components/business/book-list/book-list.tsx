import classNames from 'classnames';
import { useState } from 'react';

import { BookItem } from './book-item';
import { IBookListInterface } from './book-list-interface';

import styles from './book-list.module.scss';

type VariantDisplay = 'list' | 'tile';

export const BookList = ({
  books = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  variantDisplay = 'list',
  className,
  ...props
}: IBookListInterface) => {
  console.log('book list');

  return (
    <ul className={classNames(styles.list, styles[`list_${variantDisplay}`], className)} {...props}>
      {books && books.map((item) => <BookItem variantDisplay={variantDisplay} item={item} data-test-id='card' />)}
    </ul>
  );
};
