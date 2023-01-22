import { HOME_PAGE, OFFER_PAGE, RIGHT_USE_PAGE } from '../utils';

export interface INestedMenuItem {
  text: string;
  route: string;
  items?: INestedMenuItem[];
}

export type INestedMenu = INestedMenuItem[];

export const menuItems: INestedMenu = [
  {
    text: 'Витрина книг',
    route: HOME_PAGE,
    items: [
      {
        text: 'Все книги',
        route: `${HOME_PAGE}all-books`,
      },
      {
        text: 'Бизнес-книги',
        route: `${HOME_PAGE}business-books`,
      },
      {
        text: 'Детективы',
        route: `${HOME_PAGE}detectives`,
      },
      {
        text: 'Детские книги',
        route: `${HOME_PAGE}chld`,
      },
      {
        text: 'Зарубежная литература',
        route: `${HOME_PAGE}foreign-literature`,
      },
      {
        text: 'История',
        route: `${HOME_PAGE}history`,
      },
      {
        text: 'Классическая литература',
        route: `${HOME_PAGE}classic-literature`,
      },
      {
        text: 'Книги по психологии',
        route: `${HOME_PAGE}psychology-books`,
      },
      {
        text: 'Культура и искусство',
        route: `${HOME_PAGE}culture-and-art`,
      },
      {
        text: 'Наука и образование',
        route: `${HOME_PAGE}science-and-education`,
      },
      {
        text: 'Публицистическая литература',
        route: `${HOME_PAGE}nonfiction-literature`,
      },
      {
        text: 'Справочники',
        route: `${HOME_PAGE}reference-books`,
      },
      {
        text: 'Фантастика',
        route: `${HOME_PAGE}fantasy`,
      },
      {
        text: 'Юмористическая литература',
        route: `${HOME_PAGE}humorous`,
      },
    ],
  },
  {
    text: 'Правила пользования',
    route: RIGHT_USE_PAGE,
  },
  {
    text: 'Договор оферты',
    route: OFFER_PAGE,
  },
];
