// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { useMatchMedia } from '../../../hooks';
import { Logo, UserBlock } from '../../plain';
import { Icon, Typography } from '../../ui';

import { IHeaderInterface } from './header-interface';

import styles from './header.module.scss';

export const Header = ({ className, ...props }: IHeaderInterface) => {
  const { isM } = useMatchMedia();

  if (isM) {
    return (
      <div className={classNames(styles.header, className)} {...props}>
        <Icon icon='Menu' />
        <Typography className={classNames(styles.name)} variant='h3'>
          Библиотека
        </Typography>
      </div>
    );
  }

  return (
    <div className={classNames(styles.header, className)} {...props}>
      <Logo />
      <Typography className={classNames(styles.name)} variant='h3'>
        Библиотека
      </Typography>
      <UserBlock />
    </div>
  );
};
