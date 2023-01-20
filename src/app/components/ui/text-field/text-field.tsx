// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { ITextFieldInterface } from './text-field-interface';

import styles from './text-field.module.scss';

export const TextField = ({ className, ...props }: ITextFieldInterface) => {
  console.log(styles);

  return (
    <div className={styles.textField} {...props}>
      TextField Component
    </div>
  );
};
