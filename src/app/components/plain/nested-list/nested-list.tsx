// eslint-disable-next-line import/no-extraneous-dependencies
import { memo } from 'react';
import classNames from 'classnames';

import { getPrettyOfferList } from '../../../helpers';

import { INestedListInterface } from './nested-list-interface';

import styles from './nested-list.module.scss';

export const NestedList = memo(({ list, className, ...props }: INestedListInterface) => (
  <ol className={classNames(styles.nestedList, className)} {...props}>
    {getPrettyOfferList(list)}
  </ol>
));
