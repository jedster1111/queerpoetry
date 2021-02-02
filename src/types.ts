export type Poet = { id: string; name: string; portraitUrl: string };

export type Poem = { id: string; text: string };

export type PoetPageDetails = {
  poet: Poet;
  poems: Poem[];
};

export type PoetMap = {
  [poetName: string]: PoetPageDetails;
};
