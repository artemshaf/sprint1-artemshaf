import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
}

type ImageSize = 'l' | 'm' | 's';

export interface IUserAvatarInterface extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  size?: ImageSize;
}
