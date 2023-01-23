// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Icon } from '../icon';

import { IToastInterface } from './toast-interface';

import styles from './toast.module.scss';

export const Toast = ({ type, icon, children, className, ...props }: IToastInterface) => {
  console.log(styles);

  return (
    <div className={classNames(styles.toast, styles[`${type}`], className)} {...props}>
      <Icon icon={icon} />
      {children}
      <Icon className={styles.close} icon='Close' />
    </div>
  );
};
