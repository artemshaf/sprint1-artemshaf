import { DetailedHTMLProps, HTMLAttributes, ReactNode, TdHTMLAttributes } from 'react';

type CelendarItem = 'available' | 'other-month' | 'weekend' | 'booked' | 'current';

export interface ICalendarItemInterface
  extends DetailedHTMLProps<TdHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {
  type?: CelendarItem;
  day: Date;
  children?: ReactNode;
}
