import classNames from 'classnames';
import { useDocumentTitle } from 'usehooks-ts';

import { Book, Breadcrumbs } from '../../components/business';

import { IBookPageInterface } from './book-page-interface';

import styles from './book-page.module.scss';

export const BookPage = ({ className, ...props }: IBookPageInterface) => {
  useDocumentTitle('Книга - ');

  return (
    <div className={styles.bookPage} {...props}>
      <Breadcrumbs />
      <Book />
    </div>
  );
};
