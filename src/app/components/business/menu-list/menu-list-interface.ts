import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { INestedMenu, INestedMenuItem } from '../../../data';

export interface IMenuListInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  items?: INestedMenu;
}

export type MenuListItem = {
  items: INestedMenuItem[];
};

export type MenuItem = {
  item: INestedMenuItem;
};
