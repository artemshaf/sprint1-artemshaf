import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';

import { AnimatePresence, motion, useReducedMotion, Variants } from 'framer-motion';
import { ComponentType, useState } from 'react';
import { menuItems } from '../../../data';
import { Icon, Typography } from '../../ui';

import { IMenuListInterface, MenuItem, MenuListItem } from './menu-list-interface';

import styles from './menu-list.module.scss';
import { getKey } from '../../../helpers';

const mockItems = menuItems;

const variants: Variants = {
  initial: {},
  animate: { transition: { when: 'beforeChildren', staggerChildren: 0.5, duration: 0 } },
  exit: {},
};

const variantsItem: Variants = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: -20,
    opacity: 0,
  },
};

const isItemOpen = (route: string, pathname: string, pos = 1) => pathname.split('/')[pos] === route.split('/')[pos];

const ListItem: React.FC<MenuItem> = ({ item }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(() => isItemOpen(item.route, pathname));

  console.log(pathname);

  return (
    <motion.li role='listitem'>
      {item.items ? (
        <>
          <Typography
            onClick={() => setIsOpen((prev) => !prev)}
            variant='p'
            className={cn({
              [styles.choosed__title]: isOpen,
            })}
          >
            {item.text}
            {isOpen ? <Icon icon='Down' /> : <Icon icon='Up' />}
          </Typography>
          <AnimatePresence initial={!isOpen}>
            {isOpen && (
              <motion.ul
                role='list'
                initial={isOpen ? 'animate' : 'initial'}
                animate={isOpen ? 'animate' : 'initial'}
                exit='exit'
                layout={true}
                variants={variants}
              >
                {item.items.map(
                  (child) =>
                    !child.items && (
                      <motion.li
                        role='listitem'
                        layout={true}
                        initial='initial'
                        animate='animate'
                        variants={variantsItem}
                        key={getKey()}
                        className={cn({
                          [styles.choosed__item]: pathname === child.route,
                        })}
                      >
                        <Link to={child.route}>{child.text}</Link>
                      </motion.li>
                    )
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          to={item.route}
          onClick={() => {
            console.log('click');
            setIsOpen((prev) => !prev);
          }}
          className={cn({
            [styles.choosed]: pathname === item.route,
          })}
        >
          <Typography variant='p'>{item.text}</Typography>
        </Link>
      )}
    </motion.li>
  );
};

const List: ComponentType<MenuListItem> = ({ items }) => {
  return (
    <motion.ul role='list' key={getKey()} className={styles.menu}>
      {items.map((item) => (
        <ListItem item={item} key={getKey()} />
      ))}
    </motion.ul>
  );
};

export const MenuList = ({ items = mockItems, className, ...props }: IMenuListInterface) => {
  return (
    <nav role='navigation' className={cn(styles.menu, className)} {...props}>
      <List items={items} />
    </nav>
  );
};
