// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { useState } from 'react';
import { Typography } from '../typography';

import { ITextFieldInterface } from './text-field-interface';

import styles from './text-field.module.scss';

export const TextField = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  className,
  disabled,
  error,
  assistive,
  ...props
}: ITextFieldInterface) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label className={styles.label}>
      <input
        className={classNames(className, [styles.input], {
          [styles.input_active]: isFocus,
          [styles.input_error]: error,
        })}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => !value && setIsFocus(false)}
        {...props}
      />
      <Typography
        variant='info-l'
        className={classNames([styles.placeholder], {
          [styles.placeholder_active]: isFocus || value,
        })}
      >
        {placeholder}
      </Typography>
      {assistive && (
        <Typography className={classNames(styles.assistive, { [styles.assistive_error]: error })} variant='info-l'>
          {assistive}
        </Typography>
      )}
    </label>
  );
};
