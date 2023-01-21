// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { useDocumentTitle } from 'usehooks-ts';
import { NestedList, WithMenu } from '../../components';
import { offerPageData } from '../../data';
import { getPrettyOfferList } from '../../helpers/pretty-offer-list';

import { IOfferPageInterface } from './offer-page-interface';

import styles from './offer-page.module.scss';

export const OfferPage = ({ className, ...props }: IOfferPageInterface) => {
  useDocumentTitle('Договор офёрты');
  console.log(styles);

  return (
    <WithMenu className={styles.offerPage} {...props}>
      <NestedList list={offerPageData} />
    </WithMenu>
  );
};
