# Faker Jellycat

A tiny library to generate mock data of tiny companions.

## Installation

```bash
yarn add -D @badrequest400/faker-jellycat
```

## Usage
  
```javascript
import { jellycat } from '@badrequest400/faker-jellycat';


jellycat(); // { price: { gbp: 1600 }, description: 'Amuseable Toast', url: 'https://www.jellycat.com/amuseable-toast-a6t/?search=gluten', identifier: 'amuseable-toast' }

jellycat.description(); // 'Amuseable Clementine'

jellycat.identifier(); // 'vivacious-vegetable-aubergine'

jellycat.url(); // 'https://www.jellycat.com/vivacious-vegetable-broccoli-vv6b/?search=broccoli'

jellycat.price(); // { gbp: 1600 }
```
