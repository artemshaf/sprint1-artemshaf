// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import { menuItems } from '../../../data';
import { HOME_PAGE, OFFER_PAGE, RIGHT_USE_PAGE } from '../../../utils';
import { Icon } from '../../ui';
import { Typography } from '../../ui/typography';

import { IMenuListInterface } from './menu-list-interface';

import styles from './menu-list.module.scss';

const mockItems = menuItems;

export const MenuList = ({ items = mockItems, className, ...props }: IMenuListInterface) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className={className}>
      <div
        className={classNames(styles.list__title__wrapper, {
          [styles.active]: pathname === HOME_PAGE,
        })}
      >
        <Link to={HOME_PAGE}>
          <Typography className={classNames(styles.list__title_main)} variant='h5'>
            Витрина книг
          </Typography>
        </Link>
        {pathname === HOME_PAGE ? <Icon icon='Down' /> : <Icon icon='Up' />}
      </div>
      <ul className={classNames(styles.list, className)} {...props}>
        {items &&
          items.map((item, index) => (
            <li
              className={classNames(styles.list__item, {
                // [styles.active_item]: index === 0,
              })}
            >
              {item}{' '}
            </li>
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
