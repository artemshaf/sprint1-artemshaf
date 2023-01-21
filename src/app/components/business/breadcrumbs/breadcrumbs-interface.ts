import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IBreadcrumbsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  last?: string;
}
