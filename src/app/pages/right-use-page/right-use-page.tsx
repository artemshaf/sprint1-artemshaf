// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { useDocumentTitle } from 'usehooks-ts';

import { NestedList, WithMenu } from '../../components';
import { rightUseData } from '../../data';

import { IRightUsePageInterface } from './right-use-page-interface';

import styles from './right-use-page.module.scss';

export const RightUsePage = ({ className, ...props }: IRightUsePageInterface) => {
  useDocumentTitle('Правила использования');

  return (
    <WithMenu className={classNames(styles.rightUsePage, className)} {...props}>
      <NestedList list={rightUseData} />
    </WithMenu>
  );
};
