// eslint-disable-next-line import/no-extraneous-dependencies
import { memo } from 'react';
import classNames from 'classnames';

import { getKey } from '../../../helpers';

import { IBreadcrumbsInterface } from './breadcrumbs-interface';

import styles from './breadcrumbs.module.scss';

export const Breadcrumbs = memo(({ last, className, ...props }: IBreadcrumbsInterface) => {
  const pathnames = ['Бизнес книги', 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих'];

  if (pathnames) {
    return (
      <ul className={classNames(styles.breadcrumbs, className)}>
        {pathnames.map((item, index) =>
          index === pathnames.length - 1 ? (
            <li className={classNames(styles.breadcrumbs__item, className)} key={getKey()}>
              {item}
            </li>
          ) : (
            <li className={classNames(styles.breadcrumbs__item, className)} key={getKey()}>
              {item}
            </li>
          )
        )}
      </ul>
    );
  }

  return null;
});

// const { pathname } = useLocation();
// const pathnames = pathname.split('/').filter((el) => el);

// if (pathnames) {
//   return (
//     <ul className={cn(className)} {...props}>
//       {pathnames.map((ph, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//         const isLast = index === pathnames.length - 1;

//         return isLast ? (
//           <li className={cn('bread-crumbs__list-item')} key={getKey()}>
//             <span className={cn('bread-crumbs__list-item__text bread-crumbs__list-item__text_active')}>
//               {last ? last : ph}
//             </span>
//           </li>
//         ) : (
//           <li className={cn('bread-crumbs__list-item')} key={getKey()}>
//             <Link to={routeTo}>
//               <span className={cn('bread-crumbs__list-item__text')}>{ph}</span>
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
