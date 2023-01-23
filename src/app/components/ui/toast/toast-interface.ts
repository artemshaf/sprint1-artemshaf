import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IconName } from '../icon/icon-interface';

export interface IToastInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: IconName;
  type: 'success' | 'error';
}
