// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IReviewItemInterface } from './review-item-interface';

import styles from './review-item.module.scss';

export const ReviewItem = ({ className, ...props }: IReviewItemInterface) => (
  <div className={classNames(styles.reviewItem, className)} {...props}>
    ReviewItem Component
  </div>
);
