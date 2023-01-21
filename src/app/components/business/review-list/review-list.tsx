// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { IReviewListInterface } from './review-list-interface';

import styles from './review-list.module.scss';

export const ReviewList = ({ className, ...props }: IReviewListInterface) => (
  <div className={classNames(styles.reviewList, className)} {...props}>
    ReviewList Component
  </div>
);
