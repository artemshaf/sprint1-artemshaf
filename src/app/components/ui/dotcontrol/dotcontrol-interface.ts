import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IDotcontrolInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  count?: number;
}
