/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { Icon } from '../icon';

import { IButtonInterface } from './button-interface';

import styles from './button.module.scss';

export const Button = ({
  children,
  color = 'primary',
  type = 'button',
  size = 'l',
  icon,
  className,
  ...props
}: IButtonInterface) => {
  if (!children && icon) {
    return (
      <button
        className={classNames(className, styles[color], styles[size], styles.icon, className)}
        type={type}
        {...props}
      >
        <Icon icon={icon} />
      </button>
    );
  }

  return (
    <button
      className={classNames(className, styles[color], styles[size], styles.button, className)}
      type={type}
      {...props}
    >
      {children}
      {icon && <Icon icon={icon} />}
    </button>
  );
};
