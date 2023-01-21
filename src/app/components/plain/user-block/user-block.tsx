import classNames from 'classnames';

import { getCapitalizeText } from '../../../helpers';
import { Typography, UserAvatar } from '../../ui';

import { IUserBlockInterface } from './user-block-interface';

import styles from './user-block.module.scss';

export const UserBlock = ({ className, ...props }: IUserBlockInterface) => {
  const username = 'Иван';

  return (
    <div className={classNames(styles.wrapper, className)} {...props}>
      <Typography variant='span'>Привет, {getCapitalizeText(username)}!</Typography>
      <UserAvatar />
    </div>
  );
};
