export * from './pretty-offer-list';
export * from './calendar';

export const getKey = (count = 2): string => {
  let result = '';

  for (let index = 0; index < count; index++) {
    result += (Math.random() * 10000).toString(36).substring(7);
  }

  return result;
};

export const getFullRussianDate = (date = new Date()): string =>
  new Intl.DateTimeFormat('ru', {
    dateStyle: 'long',
  }).format(date);

export const getCapitalizeText = (str: string): string => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
