// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IRegisterPageInterface } from './register-page-interface';

import styles from './register-page.module.scss';

export const RegisterPage = ({ className, ...props }: IRegisterPageInterface) => {
  console.log(styles);

  return (
    <div className={styles.registerPage} {...props}>
      RegisterPage Component
    </div>
  );
};
