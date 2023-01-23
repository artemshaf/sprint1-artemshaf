// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { socialsList } from '../../../data/socials';

import { ISocialsInterface } from './socials-interface';

import styles from './socials.module.scss';
import { getKey } from '../../../helpers';

const mockItems = socialsList;

export const Socials = ({ items = mockItems, className, ...props }: ISocialsInterface) => (
  <ul className={classNames(styles.socials, className)} {...props}>
    {socialsList.map((item) => (
      <li key={getKey()}>
        <a href={item.link}>{item.icon ? item.icon : item.text}</a>
      </li>
    ))}
  </ul>
);
