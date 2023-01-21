import classNames from 'classnames';

import { MenuList } from '../..';

import { IWithMenuInterface } from './with-menu-interface';

import styles from './with-menu.module.scss';

export const WithMenu = ({ children, className, ...props }: IWithMenuInterface) => (
  <div className={classNames(styles.wrapper, className)} {...props}>
    <MenuList className={classNames(styles.menu)} />
    {children}
  </div>
);
