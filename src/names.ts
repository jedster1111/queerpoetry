import { Poet, PoetMap } from "./types";
import sharonOldsPoems from "./poems/sharonOlds";

export const names = [
  "Jeanne Hruby",
  "Myrta Boulter",
  "Lessie Dentler",
  "Kyoko Wilk",
  "Joann Schwebach",
  "Huong Hanna",
  "Angila Mccalla",
  "Hyo Bruce",
  "Shakira Overbey",
  "Isabel Fenske",
  "Caroyln Kitt",
  "Herb Falzone",
  "Raul Gallo",
  "Nam Rigg",
  "Lynne Stallman",
  "Kaleigh Cabello",
  "Marian Replogle",
  "Lavera Schober",
  "Tiny Hank",
  "Helaine Freeze",
  "Lin Mcardle",
  "Prudence Colosimo",
  "Shavonda Madewell",
  "Yee Guadarrama",
  "Chase Rm",
  "Dessie Steller",
  "Gaylene Kelemen",
  "Karyl Mccurry",
  "Moon Eusebio",
  "Sheldon Fargo",
  "Jeanne Hruby",
  "Myrta Boulter",
  "Lessie Dentler",
  "Kyoko Wilk",
  "Joann Schwebach",
  "Huong Hanna",
  "Angila Mccalla",
  "Hyo Bruce",
  "Shakira Overbey",
  "Isabel Fenske",
  "Caroyln Kitt",
  "Herb Falzone",
  "Raul Gallo",
  "Nam Rigg",
  "Lynne Stallman",
  "Kaleigh Cabello",
  "Marian Replogle",
  "Lavera Schober",
  "Tiny Hank",
  "Helaine Freeze",
  "Lin Mcardle",
  "Prudence Colosimo",
  "Shavonda Madewell",
  "Yee Guadarrama",
  "Chase Rm",
  "Dessie Steller",
  "Gaylene Kelemen",
  "Karyl Mccurry",
  "Moon Eusebio",
  "Sheldon Fargo",
  "Jeanne Hruby",
  "Myrta Boulter",
  "Lessie Dentler",
  "Kyoko Wilk",
  "Joann Schwebach",
  "Huong Hanna",
  "Angila Mccalla",
  "Hyo Bruce",
  "Shakira Overbey",
  "Isabel Fenske",
  "Caroyln Kitt",
  "Herb Falzone",
  "Raul Gallo",
  "Nam Rigg",
  "Lynne Stallman",
  "Kaleigh Cabello",
  "Marian Replogle",
  "Lavera Schober",
  "Tiny Hank",
  "Helaine Freeze",
  "Lin Mcardle",
  "Prudence Colosimo",
  "Shavonda Madewell",
  "Yee Guadarrama",
  "Chase Rm",
  "Dessie Steller",
  "Gaylene Kelemen",
  "Karyl Mccurry",
  "Moon Eusebio",
  "Sheldon Fargo",
];

export function createPoet(name: string): Poet {
  return {
    id: createIdFromPoetName(name),
    name,
    portraitUrl:
      "https://nypost.com/wp-content/uploads/sites/2/2020/01/peter-chinman-by-michael-j.-fiedler.jpg?quality=90&strip=all&w=618&h=410&crop=1",
  };
}

export const poets: Poet[] = names.map(createPoet);

export const poetMap: PoetMap = names.reduce<PoetMap>((accum, name) => {
  accum[createIdFromPoetName(name)] = {
    poet: createPoet(name),
    poems: sharonOldsPoems.map((poemUrl) => ({ url: poemUrl })),
  };
  return accum;
}, {});

function createIdFromPoetName(name: string): string {
  return name.replace(" ", "-").toLowerCase();
}
