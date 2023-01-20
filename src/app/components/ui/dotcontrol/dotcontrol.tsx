// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IDotcontrolInterface } from './dotcontrol-interface';

import styles from './dotcontrol.module.scss';

export const Dotcontrol = ({ className, ...props }: IDotcontrolInterface) => {
  console.log(styles);

  return (
    <div className={styles.dotcontrol} {...props}>
      Dotcontrol Component
    </div>
  );
};
