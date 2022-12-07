export interface Country {
  cca2: string;
  translations: {
    [key: string]: {
      official: string;
      common: string;
    }
  };
  latlng: number[];
  status: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    }
  };
  capital: string;
  capitalInfo: {
    name: string;
    latlng: number[];
  };
  region: string;
  languages: {
    [key: string]: string;
  };
  area: number;
  borders: string[];
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  gini: {
    [key: string]: number;
  },
  timezones: string[];
  continents: string[];
}
