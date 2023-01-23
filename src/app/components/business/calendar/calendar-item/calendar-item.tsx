import cn from 'classnames';
import { areEqual } from '../../../../helpers';

import { ICalendarItemInterface } from './calendar-item-interface';

import styles from './calendar-item.module.scss';

export const CalendarItem = ({ day, type = 'available', children, className, ...props }: ICalendarItemInterface) => {
  return (
    <td className={cn(styles.item, className)} {...props}>
      <button
        className={cn(styles.btn, styles[`${type}`], {
          [styles.current]: areEqual(day, new Date()),
        })}
        type='button'
      >
        {day.getDate()}
      </button>
    </td>
  );
};
