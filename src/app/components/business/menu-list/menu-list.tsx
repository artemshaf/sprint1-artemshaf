/* eslint-disable @typescript-eslint/ban-types */
import { Link, useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { motion, useReducedMotion } from 'framer-motion';
import { ComponentType, useState } from 'react';
import { INestedMenuItem, menuItems } from '../../../data';
import { Typography } from '../../ui';

import { IMenuListInterface } from './menu-list-interface';

import styles from './menu-list.module.scss';
import { getKey } from '../../../helpers';

const mockItems = menuItems;

export type MenuListItem = {
  items: INestedMenuItem[];
};

export type MenuItem = {
  item: INestedMenuItem;
};

const compareFirstSplited = (str1: string, str2: string, sep = '/') => str1.split(sep)[1] === str2.split(sep)[1];

const ListItem: React.FC<MenuItem> = ({ item }) => {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState<boolean>(() => compareFirstSplited(item.route, pathname));

  const variants = {
    visible: {
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 20,
      transition: shouldReduceMotion
        ? {}
        : {
            when: 'beforeChildren',
            staggerChildren: 0.08,
          },
    },
    hidden: { marginTop: 0, marginBottom: 0, marginLeft: 0 },
  };

  const variantsItem = {
    visible: {
      opacity: 1,
      height: '39px',
      x: 0,
    },
    hidden: { opacity: 0, height: 0, x: -20 },
  };

  return (
    <motion.li
      className={classNames({
        [styles.item_choosed]: pathname.split('/')[1] === item.route.split('/')[1],
      })}
      id={pathname.includes(item.route) ? 'item_choosed' : ''}
      key={getKey()}
    >
      {item.items ? (
        <>
          <Link
            to={item.route}
            onClick={() => {
              console.log('click');
              setIsOpen((prev) => !prev);
            }}
          >
            <Typography variant='p'>{item.text}</Typography>
          </Link>
          <motion.ul
            initial={compareFirstSplited(item.route, pathname) ? 'visible' : 'hidden'}
            animate={compareFirstSplited(item.route, pathname) ? 'visible' : 'hidden'}
            variants={variants}
          >
            {item.items.map((child) => (
              <motion.li
                className={classNames({
                  [styles.item_choosed]: pathname === child.route,
                })}
                initial={compareFirstSplited(child.route, pathname) ? 'visible' : 'hidden'}
                animate={compareFirstSplited(child.route, pathname) ? 'visible' : 'hidden'}
                variants={variantsItem}
              >
                <Link to={child.route}>{child.text}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </>
      ) : (
        <Link to={item.route}>
          <Typography variant='p'>{item.text}</Typography>
        </Link>
      )}
    </motion.li>
  );
};

const List: ComponentType<MenuListItem> = ({ items }) => {
  return (
    <motion.ul key={getKey()} className={styles.menu}>
      {items.map((item) => (
        <ListItem item={item} />
      ))}
    </motion.ul>
  );
};

export const MenuList = ({ items = mockItems, className, ...props }: IMenuListInterface) => {
  const { pathname } = useLocation();

  return (
    <nav className={classNames(styles.menu, className)} {...props}>
      <List items={items} />
    </nav>
  );
};
