// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Icon, Typography } from '../../components/ui';

import { IHomePageInterface } from './home-page-interface';

import styles from './home-page.module.scss';

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  console.log(styles);

  return (
    <div className={styles.homePage} {...props}>
      <Typography variant='h4'>123</Typography>
      <Icon icon='BellSimple' />
    </div>
  );
};
