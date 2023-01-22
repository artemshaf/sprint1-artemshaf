import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { INestedMenu } from '../../../data';

export interface IMenuListInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  items?: INestedMenu;
}
