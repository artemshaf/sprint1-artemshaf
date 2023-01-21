// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IDividerInterface } from './divider-interface';

import styles from './divider.module.scss';

export const Divider = ({ className, ...props }: IDividerInterface) => (
  <div className={classNames(styles.divider, className)} {...props} />
);
