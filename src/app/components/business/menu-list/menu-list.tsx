import { Link, useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { menuItems } from '../../../data';
import { HOME_PAGE, OFFER_PAGE, RIGHT_USE_PAGE } from '../../../utils';
import { Icon } from '../../ui';
import { Typography } from '../../ui/typography';

import { IMenuListInterface } from './menu-list-interface';

import styles from './menu-list.module.scss';

const mockItems = menuItems;

export const MenuList = ({ items = mockItems, className, ...props }: IMenuListInterface) => {
  const { pathname } = useLocation();

  return (
    <div className={className}>
      <div
        className={classNames(styles.list__title__wrapper, {
          [styles.active]: pathname.includes(HOME_PAGE),
        })}
      >
        <Link to={HOME_PAGE}>
          <Typography className={classNames(styles.list__title_main)} variant='h5'>
            Витрина книг
          </Typography>
        </Link>
        {pathname.includes(HOME_PAGE) ? <Icon icon='Down' /> : <Icon icon='Up' />}
      </div>
      <ul className={classNames(styles.list, className)} {...props}>
        {items &&
          items.map((item) => (
            <Link to={HOME_PAGE + item}>
              <li
                className={classNames(styles.list__item, {
                  [styles.active_item]: pathname[pathname.length - 1].split(' ').join('') === item.split(' ').join(''),
                })}
              >
                {item}
              </li>
            </Link>
          ))}
      </ul>
      <Link to={RIGHT_USE_PAGE}>
        <Typography
          className={classNames(styles.list__title, {
            [styles.active]: pathname.includes(RIGHT_USE_PAGE),
          })}
          variant='h5'
        >
          Правила пользования
        </Typography>
      </Link>
      <Link to={OFFER_PAGE}>
        <Typography
          className={classNames(styles.list__title, {
            [styles.active]: pathname.includes(OFFER_PAGE),
          })}
          variant='h5'
        >
          Договор оферты
        </Typography>
      </Link>
    </div>
  );
};
