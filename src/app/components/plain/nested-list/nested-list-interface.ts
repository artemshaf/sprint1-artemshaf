import { DetailedHTMLProps, OlHTMLAttributes } from 'react';
import { INestedList } from '../../../data';

export interface INestedListInterface extends DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> {
  list: INestedList;
}
