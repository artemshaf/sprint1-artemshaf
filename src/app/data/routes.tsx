import { HomePage, LoginPage, RegisterPage, BookPage, OfferPage, RightUsePage } from '../pages';
import { BOOK_PAGE, HOME_PAGE, LOGIN_PAGE, OFFER_PAGE, REGISTER_PAGE, RIGHT_USE_PAGE } from '../utils';

interface IRoute {
  path: string;
  element: JSX.Element;
}

export const publicRoutes: IRoute[] = [
  {
    path: HOME_PAGE,
    element: <HomePage />,
  },
  {
    path: LOGIN_PAGE,
    element: <LoginPage />,
  },
  {
    path: REGISTER_PAGE,
    element: <RegisterPage />,
  },
  {
    path: BOOK_PAGE,
    element: <BookPage />,
  },
  {
    path: RIGHT_USE_PAGE,
    element: <RightUsePage />,
  },
  {
    path: OFFER_PAGE,
    element: <OfferPage />,
  },
];

export const authRoutes: IRoute[] = [];
