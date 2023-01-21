import classNames from 'classnames';

import { IRegisterPageInterface } from './register-page-interface';

import styles from './register-page.module.scss';

export const RegisterPage = ({ className, ...props }: IRegisterPageInterface) => (
  <div className={classNames(styles.registerPage, className)} {...props}>
    RegisterPage Component
  </div>
);
