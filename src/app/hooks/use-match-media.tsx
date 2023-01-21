import { useEffect, useState } from 'react';

const defaultQueries = [
  '(max-width: 319px)',
  '(max-width: 399px)',
  '(max-width: 767px)',
  '(max-width: 999px)',
  '(max-width: 1339px)',
];

interface IUseMatchMedia {
  isXs: boolean;
  isS: boolean;
  isM: boolean;
  isL: boolean;
  isXl: boolean;
}

export const useMatchMedia = (queries: string[] = defaultQueries): IUseMatchMedia => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

    return () => mediaQueryLists.forEach((list) => list.removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queries]);

  return ['isXs', 'isS', 'isM', 'isL', 'isXl'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  ) as IUseMatchMedia;
};
