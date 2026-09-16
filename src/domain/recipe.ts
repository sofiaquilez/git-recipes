export class Recipe {
  _name!: string;
  _category?: string;
  _time!: number;
  _desc!: string;

  constructor(aName: string) {
    this.name = aName;
  }

  get name(): string {
    return this._name;
  }

  set name(aName: string) {
    const trimmed = aName.trim();
    if (trimmed.length === 0) {
      throw new Error("El nombre de la receta no puede ser vacío.");
    }
    this._name = trimmed;
  }

  get time(): number {
    return this._time;
  }

  set time(aTime: number) {
    if (!aTime) {
      throw new Error("El time-prep no puede ser vacio.")
    }
    this._time = aTime;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(aDesc: string) {
    this._desc = aDesc;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(aCategory: string) {
    this._category = aCategory;
  }

  toString(): string {
    return `Receta: ${this.name} - categoría: ${this.category} - descripcion: ${this.desc} - time prep: ${this.time} min`;
  }
}
