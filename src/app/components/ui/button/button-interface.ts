import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { IconName } from '../icon/icon-interface';

type ButtonColorType = 'primary' | 'secondary' | 'text';
type ButtonSizeType = 'l' | 's';

export interface IButtonInterface
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  color?: ButtonColorType;
  size?: ButtonSizeType;
  icon?: IconName;
}
