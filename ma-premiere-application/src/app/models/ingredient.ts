export class Ingredient {
  private _id: number;
  private _name: string;

  constructor( id: number, name: string) {
    this._name = name;
    this._id = id;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}