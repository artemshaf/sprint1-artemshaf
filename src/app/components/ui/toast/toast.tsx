// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IToastInterface } from './toast-interface';

import styles from './toast.module.scss';

export const Toast = ({ className, ...props }: IToastInterface) => {
  console.log(styles);

  return (
    <div className={styles.toast} {...props}>
      Toast Component
    </div>
  );
};
