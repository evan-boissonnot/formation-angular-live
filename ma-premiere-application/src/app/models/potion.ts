import { Ingredient } from './ingredient';

export class Potion {
  private _name: string;
  private _effect: string;
  private _ingredients: Ingredient[];

  constructor(name: string, ingredientList: Ingredient[] = null) {
    this._name = name;

    this._ingredients = ingredientList;
    if (! this._ingredients) {
      this._ingredients = [];
    }
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get effect(): string {
    return this._effect;
  }

  public set effect(value: string) {
    this._effect = value;
  }

  public get ingredients(): Ingredient[] {
    return this._ingredients;
  }
}
