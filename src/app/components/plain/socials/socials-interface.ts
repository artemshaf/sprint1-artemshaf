import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ISocial } from '../../../data/socials';

export interface ISocialsInterface extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  items?: ISocial[];
}
