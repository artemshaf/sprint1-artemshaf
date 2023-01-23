// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import { getKey } from '../../../../helpers';
import { CalendarItem } from '../calendar-item';

import { ICalendarRowInterface } from './calendar-row-interface';

import styles from './calendar-row.module.scss';

export const CalendarRow = ({ row, className, ...props }: ICalendarRowInterface) => {
  return (
    <tr className={cn(className)} {...props}>
      {row.map((cell) => (
        <CalendarItem key={getKey()} day={cell} />
      ))}
    </tr>
  );
};
