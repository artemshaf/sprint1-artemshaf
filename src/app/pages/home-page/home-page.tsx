// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import classNames from 'classnames';
import { useDocumentTitle } from 'usehooks-ts';

import { BookList, Button, Icon, Input, Typography, WithMenu } from '../../components';

import { IHomePageInterface } from './home-page-interface';

import styles from './home-page.module.scss';

type VariantDisplay = 'list' | 'tile';

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  const [variantDisplay, setVariantDisplay] = useState<VariantDisplay>('tile');

  useDocumentTitle('Домашная страница');

  return (
    <WithMenu className={classNames(styles.home, className)} {...props}>
      <div className={styles.content}>
        <div className={styles.content__top}>
          <div className={styles.content__top__input__wrapper}>
            <Input className={styles.content__top__input} search={true} placeholder='Поиск книги или автора…' />
            <Button size='s' color='secondary' className={styles.content__top__sortBtn}>
              <Icon icon='SortAsc' />
              <Typography variant='span'>По рейтингу</Typography>
            </Button>
          </div>
          <div className={styles.content__top__btns}>
            <Button
              data-test-id='button-menu-view-window'
              color={variantDisplay === 'list' ? 'primary' : 'secondary'}
              onClick={() => setVariantDisplay('list')}
              icon='SquareFour'
            />
            <Button
              data-test-id='button-menu-view-list'
              color={variantDisplay === 'tile' ? 'primary' : 'secondary'}
              onClick={() => setVariantDisplay('tile')}
              icon='Menu'
            />
          </div>
        </div>
        <BookList variantDisplay={variantDisplay} books={[1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]} />
      </div>
    </WithMenu>
  );
};
