// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { ICheckboxInterface } from './checkbox-interface';

import styles from './checkbox.module.scss';

export const Checkbox = ({ className, ...props }: ICheckboxInterface) => {
  console.log(styles);

  return (
    <div className={styles.checkbox} {...props}>
      Checkbox Component
    </div>
  );
};
