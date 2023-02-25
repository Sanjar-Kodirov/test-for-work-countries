export interface ILanguage {
  name: string;
  native: string;
  rtl: boolean;
}

export interface IContinent {
  name: string;
}

export interface IEntity {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: ILanguage[];
  continent: IContinent;
  emoji: string;
  states: any[];
}
