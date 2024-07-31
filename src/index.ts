
enum Currency {
  GBP = 'gbp'
}

type Price = Record<Currency, number>

type JellyCat = {
  price: Price;
  description: string;
  url: string;
}


