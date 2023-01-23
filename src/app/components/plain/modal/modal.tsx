// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Button, Icon } from '../../ui';

import { IModalInterface } from './modal-interface';

import styles from './modal.module.scss';

export const Modal = ({ close = true, children, className, ...props }: IModalInterface) => {
  console.log(styles);

  return (
    <div className={classNames(styles.modal, className)} {...props}>
      {close && <Button className={styles.close} color='secondary' icon='Close' />}
      {children}
    </div>
  );
};
