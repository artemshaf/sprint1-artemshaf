import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react';

export interface ITextFieldInterface
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: boolean;
  assistive?: string;
}
