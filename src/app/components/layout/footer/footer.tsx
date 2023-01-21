// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { Logo, Socials } from '../../plain';
import { Typography } from '../../ui';

import { IFooterInterface } from './footer-interface';

import styles from './footer.module.scss';

export const Footer = ({ className, ...props }: IFooterInterface) => (
  <footer className={classNames(styles.footer, className)} {...props}>
    <Typography variant='span'>© 2020-{new Date().getFullYear()} Cleverland. Все права защищены.</Typography>
    <Socials />
  </footer>
);
