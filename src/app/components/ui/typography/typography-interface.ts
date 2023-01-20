import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'span'
  | 'p'
  | 'subtitle-l'
  | 'subtitle-s'
  | 'body-l'
  | 'body-s'
  | 'info-l'
  | 'info-s'
  | 'button-l'
  | 'button-s';

export interface ITypographyInterface extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  variant?: TypographyVariant;
  children: JSX.Element | ReactNode;
}
