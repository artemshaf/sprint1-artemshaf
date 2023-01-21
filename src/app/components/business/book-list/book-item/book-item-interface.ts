import { ButtonHTMLAttributes, DetailedHTMLProps, LiHTMLAttributes } from 'react';

type VariantDisplay = 'list' | 'tile';
export interface IBookItemInterface extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  item: unknown;
  variantDisplay?: VariantDisplay;
}
