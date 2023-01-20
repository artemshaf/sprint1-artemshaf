// eslint-disable-next-line import/no-extraneous-dependencies
import { createElement } from 'react';
import classNames from 'classnames';

import { ITypographyInterface } from './typography-interface';

import styles from './typography.module.scss';

export const Typography = ({ children, variant = 'p', className, ...props }: ITypographyInterface) => {
  const rightStyles = styles[`${variant}`];

  return createElement(variant, { ...props, className: classNames(className, rightStyles) }, children);
};
