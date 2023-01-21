import { DetailedHTMLProps, HTMLAttributes } from 'react';

type MunuListChildren = string[];

export interface IMenuListInterface extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  items?: MunuListChildren;
}
