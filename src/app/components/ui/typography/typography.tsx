// eslint-disable-next-line import/no-extraneous-dependencies
import { createElement } from 'react';
import classNames from 'classnames';

import { ITypographyInterface, AllowTagsArray } from './typography-interface';

import styles from './typography.module.scss';

export const Typography = ({ children, variant = 'p', className, ...props }: ITypographyInterface) => {
  const rightStyles = styles[`${variant}`];

  const tag = AllowTagsArray.includes(variant) ? variant : 'p';

  return createElement(tag, { ...props, className: classNames(className, rightStyles) }, children);
};
