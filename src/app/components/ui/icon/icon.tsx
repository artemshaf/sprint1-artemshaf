// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IIconInterface, importedIcons } from './icon-interface';

import styles from './icon.module.scss';

export const Icon = ({ icon, ...props }: IIconInterface) => {
  const CurrentIcon = importedIcons[icon];

  return <CurrentIcon {...props} />;
};
