import classNames from 'classnames';

import { ILoaderInterface } from './loader-interface';

import styles from './loader.module.scss';

export const Loader = ({ className, ...props }: ILoaderInterface) => (
  <div id='loader' className={classNames(styles.loader, className)} {...props} />
);
