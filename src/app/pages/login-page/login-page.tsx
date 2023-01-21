// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { ILoginPageInterface } from './login-page-interface';

import styles from './login-page.module.scss';

export const LoginPage = ({ className, ...props }: ILoginPageInterface) => {
  console.log(styles);

  return (
    <div className={styles.loginPage} {...props}>
      LoginPage Component
    </div>
  );
};
