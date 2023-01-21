import classNames from 'classnames';

import { getFullRussianDate } from '../../../helpers';
import { Button, Divider, Rating, Typography, UserAvatar } from '../..';

import AvatarDefault from './images/algoritms.png';
import { IBookInterface } from './book-interface';

import styles from './book.module.scss';

export const Book = ({ className, ...props }: IBookInterface) => (
  <div className={classNames(styles.book, className)} {...props}>
    <div className={classNames(styles.book__topInfo)}>
      <img className={classNames(styles.book__topInfo__img)} src={AvatarDefault} alt='book' />
      <div className={classNames(styles.book__topInfo__descr)}>
        <Typography variant='h3' className={classNames(styles.book__topInfo__descr__title)}>
          Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
        </Typography>
        <Typography variant='h5' className={classNames(styles.book__topInfo__descr__author)}>
          Адитья Бхаргава, 2019
        </Typography>
        <Button className={classNames(styles.book__topInfo__descr__btn)} size='l'>
          Забронировать
        </Button>
      </div>
      <div className={classNames(styles.book__topInfo__descr__about__wrapper)}>
        <Typography variant='h5'>О книге</Typography>
        <Typography className={classNames(styles.book__topInfo__descr__about)} variant='p'>
          {`Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
            кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального
            Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это
            свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто.
            А грокать алгоритмы — это веселое и увлекательное занятие.`}
        </Typography>
      </div>
    </div>
    <div className={classNames(styles.book__rating__wrapper)}>
      <Typography className={classNames(styles.book__rating__title)} variant='h3'>
        Рейтинг
      </Typography>
      <Divider className={classNames(styles.divider)} />
      <div className={classNames(styles.book__rating__rate__wrapper)}>
        <Rating isChanged={false} />
        <Typography variant='span'>4.3</Typography>
      </div>
    </div>
    <div className={classNames(styles.book__info__wrapper)}>
      <Typography className={classNames(styles.book__info__title)} variant='h3'>
        Подробная информация
      </Typography>
      <Divider className={classNames(styles.divider)} />
      <ul className={classNames(styles.book__info__list)}>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Издательство</Typography>
          <Typography variant='span'>Питер</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Год издания</Typography>
          <Typography variant='span'>2019</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Страниц</Typography>
          <Typography variant='span'>288</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Мягкая</Typography>
          <Typography variant='span'>Питер</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Формат</Typography>
          <Typography variant='span'>70х100</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Жанр</Typography>
          <Typography variant='span'>Компьютерная литература</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Вес</Typography>
          <Typography variant='span'>370 г</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>ISBN</Typography>
          <Typography variant='span'>978-5-4461-0923-4</Typography>
        </li>
        <li className={classNames(styles.book__info__list__item)}>
          <Typography variant='span'>Изготовитель</Typography>
          <Typography variant='span'>
            ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
          </Typography>
        </li>
      </ul>
    </div>
    <div className={classNames(styles.book__review__wrapper)}>
      <Typography variant='h3'>Отзывы</Typography>
      <Divider className={classNames(styles.divider)} />
      <ul className={classNames(styles.book__review__list)}>
        <li className={classNames(styles.book__review__list__item)}>
          <div className={classNames(styles.book__review__list__item__info)}>
            <UserAvatar size='s' />
            <Typography>Иван</Typography>
            <Typography>{getFullRussianDate()}</Typography>
          </div>
          <Rating isChanged={false} className={classNames(styles.book__review__list__item__rate)} />
          <Typography className={classNames(styles.book__review__list__item__descr)} variant='span'>
            Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет
            шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
            предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как
            уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены
            сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для
            своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные
            исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу
            обществу.
          </Typography>
        </li>
        <li className={classNames(styles.book__review__list__item)}>
          <div className={classNames(styles.book__review__list__item__info)}>
            <UserAvatar size='s' />
            <Typography>Иван</Typography>
            <Typography>{getFullRussianDate()}</Typography>
          </div>
          <Rating isChanged={false} className={classNames(styles.book__review__list__item__rate)} />
          <Typography className={classNames(styles.book__review__list__item__descr)} variant='span'>
            Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет
            шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик
            предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как
            уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены
            сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для
            своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные
            исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу
            обществу.
          </Typography>
        </li>
      </ul>
    </div>
    <Button size='l' className={classNames(styles.book__btnMark)}>
      оценить книгу
    </Button>
  </div>
);
