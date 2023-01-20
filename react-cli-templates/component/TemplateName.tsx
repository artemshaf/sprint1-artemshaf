// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';

import { ITemplateNameInterface } from './templateName-interface';

import styles from './templateName.module.scss';

export const TemplateName = ({ className, ...props }: ITemplateNameInterface) => {
  console.log(styles);

  return (
    <div className={styles.templateName} {...props}>
      TemplateName Component
    </div>
  );
};
