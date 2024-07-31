import data from '../data/jellycat.json';
import { getRandomElement, kebabise } from './utils';

enum Currency {
  GBP = 'gbp'
}

type Price = Record<Currency, number>

type JellyCat = {
  price: Price;
  description: string;
  url: string;
}

type JellyCatResult = JellyCat & {
  identifier: string;
}

type API = {
  description: () => JellyCat['description'];
  identifier: () => string;
  url: () => JellyCat['url'];
  price: () => JellyCat['price'];
}

export function jellycat(): JellyCatResult  {
  const item = getRandomElement<JellyCat>(data);
  return {
    ...item,
    identifier: kebabise(item.description),
  };
}
jellycat.description = () => getRandomElement<JellyCat>(data).description;
jellycat.identifier = () => kebabise(getRandomElement<JellyCat>(data).description);
jellycat.url = () => getRandomElement<JellyCat>(data).url;
jellycat.price = () => getRandomElement<JellyCat>(data).price;

export default jellycat;

