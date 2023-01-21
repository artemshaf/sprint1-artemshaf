// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../../../utils';

import { Icon, Typography } from '../../ui';

import { ILogoInterface } from './logo-interface';

import styles from './logo.module.scss';

export const Logo = ({ className, ...props }: ILogoInterface) => (
  <Link to={`${HOME_PAGE}`} className={classNames(className, styles.logo)}>
    <Icon icon='Logo' />
    <Typography className={classNames(styles.logo__text)} variant='span'>
      Cleverland
    </Typography>
  </Link>
);
