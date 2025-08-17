export interface Stylesheet {
  [key:string]: StylesheetElInterface[];
}


export interface StylesheetElInterface {
  role: string;
  hex: string;
  rgb: string;
  hsl: string;
}
