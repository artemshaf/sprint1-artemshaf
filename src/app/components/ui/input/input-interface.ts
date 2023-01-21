import { DetailedHTMLProps, HTMLAttributes, HTMLInputTypeAttribute } from 'react';

export interface IInputInterface extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  search?: boolean;
  type?: HTMLInputTypeAttribute;
}
