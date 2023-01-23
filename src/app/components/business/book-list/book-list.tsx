import { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { IBookListInterface } from './book-list-interface';

import styles from './book-list.module.scss';
import { BookItem } from './book-item';
import { getKey } from '../../../helpers';

type VariantDisplay = 'list' | 'tile';

export const BookList = ({
  books = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  variantDisplay = 'list',
  className,
  ...props
}: IBookListInterface) => {
  return (
    <motion.ul layout='size' className={classNames(styles.list, styles[`list_${variantDisplay}`], className)}>
      {books && books.map((item) => <BookItem key={getKey()} variantDisplay={variantDisplay} item={item} />)}
    </motion.ul>
  );
};
