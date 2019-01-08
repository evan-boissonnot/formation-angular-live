import { Potion } from './potion';
import { Ingredient } from './ingredient';

export const potions: Potion[] = [
  new Potion('Veritaserum', [ new Ingredient(1, 'jesaisplus'), new Ingredient(2, 'jesais') ]),
  new Potion('Polynectar'),
  new Potion('Amnésie'),
  new Potion('Ratatinage', [ new Ingredient(11, 'rat'), new Ingredient(58, 'herbe') ]),
  new Potion('Félix felicis')
];

