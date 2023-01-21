import classNames from 'classnames';

import UserAvatarImg from './images/avatar.png';
import { IUserAvatarInterface } from './user-avatar-interface';

import styles from './user-avatar.module.scss';

export const UserAvatar = ({ src = UserAvatarImg, alt, size = 'm', className, ...props }: IUserAvatarInterface) => (
  <img className={classNames(styles[`${size}`], styles.img, className)} src={src} alt={alt} {...props} />
);
