import { DetailedHTMLProps, HTMLAttributes } from 'react';

type VariantDisplay = 'list' | 'tile';
export interface IBookListInterface extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  books: unknown[];
  variantDisplay?: VariantDisplay;
}
