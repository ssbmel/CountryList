interface Country {
  altSpellings : string[];
  area : number;
  capital : string[];
  capitalInfo : {
    lating : number[]
  };
  car : {
    [key:string]: {
      side: string;
      signs: string;
    }
  };
  cca2 : string;
  cca3 : string;
  ccn3 : string;
  coatOfArms : object;
  continents : string;
  currencies : {
    [key:string]: {
      name: string;
      symbol: string;
    }
  };
  demonyms : {
    [key:string]: {
      f: string;
      m: string;
    }
  };
  favorite : boolean;
  flag : string;
  flags : {
    png : string;
    svg : string;
  }
  id : string;
  idd : {
    [key:string]: {
      root: string;
      suffixes: number;
    }
  };
  independent : boolean;
  landlocked : boolean;
  languages : string;
  latlng : number[];
  maps : string[];
  name : {
      common: string;
      official: string;
      nativeName: string[];
    }
  population : number;
  postalCode: {
    [key:string]: {
      format: string;
      regex: string;
    }
  }
  region : string;
  startOfWeek : string;
  status : string;
  subregion : string;
  timezones : number;
  tld : string;
  translations : {
    [key:string]: {
      official: string;
      common: string;
    }
  };
  unMember : boolean;
}

export default Country