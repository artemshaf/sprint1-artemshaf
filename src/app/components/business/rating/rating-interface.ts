import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IRatingInterface extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  isChanged?: boolean;
  rate?: number;
}
