import { useEffect, useState } from "react";
import { Poem } from "./types";

export function usePoems(poems: Poem[]): undefined | string[] {
  const [markdown, setMarkdown] = useState<undefined | string[]>(undefined);

  useEffect(() => {
    setMarkdown(undefined);

    const poemPromises = Promise.all(
      poems.map((poem) => {
        return import(`./poems/${poem.author}/${poem.id}.md`)
          .then((thingy) => thingy.default)
          .then((url: string) => fetch(url))
          .then((response) => response.text());
      })
    );

    poemPromises.then((poems) => setMarkdown(poems));

    return () => setMarkdown(undefined);
  }, [poems]);

  return markdown;
}
