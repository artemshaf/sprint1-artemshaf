import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ICalendarRowInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  row: Date[];
}
