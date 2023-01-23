import { DetailedHTMLProps, HTMLAttributes, TableHTMLAttributes } from 'react';

export interface ICalendarInterface extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  date?: Date;
}
