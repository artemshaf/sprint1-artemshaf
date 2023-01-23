// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { getKey, getMonthData, weekDayNames } from '../../../helpers';

import { ICalendarInterface } from './calendar-interface';
import { CalendarRow } from './calendar-row';

import styles from './calendar.module.scss';

export const Calendar = ({
  date = new Date(new Date().getFullYear(), new Date().getMonth()),
  className,
  ...props
}: ICalendarInterface) => {
  const [monthData, setMonthData] = useState(() => getMonthData(date.getFullYear(), date.getMonth()));

  useEffect(() => {
    // setMonthData(getMonthData(date));
  }, []);

  return (
    <table className={cn(styles.calendar, className)} {...props}>
      <thead>
        <tr>
          {weekDayNames.map((name) => (
            <th key={name} className=''>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {monthData.map((row) => (
          <CalendarRow key={getKey()} row={row} className='' />
        ))}
      </tbody>
    </table>
  );
};
