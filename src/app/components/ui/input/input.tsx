import { ChangeEvent, useRef, useState } from 'react';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';

import { useMatchMedia } from '../../../hooks';
import { Button } from '../button';
import { Icon } from '../icon';

import { IInputInterface } from './input-interface';

import styles from './input.module.scss';

export const Input = ({ type = 'text', search, className, ...props }: IInputInterface) => {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const { isM } = useMatchMedia();

  useOnClickOutside(inputRef, onBlur);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputText(value);
  };

  if (isM) {
    return focused ? (
      <div className={classNames(styles.wrapper)}>
        {search && <Button color={focused ? 'primary' : 'secondary'} className={styles.icons_search} icon='Search' />}
        <input
          ref={inputRef}
          placeholder='Искать...'
          onChange={onChange}
          value={inputText}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          className={classNames(className, styles.input)}
          {...props}
        />

        {search && <Button className={styles.icons_close} color={focused ? 'primary' : 'secondary'} icon='Close' />}
      </div>
    ) : (
      <Button onClick={() => onFocus()} color='secondary' icon='Search' />
    );
  }

  return (
    <div className={classNames(styles.wrapper)}>
      {search && (
        <Icon
          className={classNames({
            [styles.icons_fill]: focused,
          })}
          icon='Search'
        />
      )}
      <input
        ref={inputRef}
        placeholder='Искать...'
        onChange={onChange}
        value={inputText}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        className={classNames(className, styles.input)}
        {...props}
      />
      {search && (
        <Icon
          className={classNames({
            [styles.icons_fill]: focused,
          })}
          icon='Close'
        />
      )}
    </div>
  );
};
