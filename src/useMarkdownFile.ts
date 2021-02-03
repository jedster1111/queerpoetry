import { useEffect, useState } from "react";

export function usePoems(fileUrls: string[]): undefined | string[] {
  const [poems, setPoems] = useState<undefined | string[]>(undefined);

  useEffect(() => {
    setPoems(undefined);

    const poemPromises = Promise.all(
      fileUrls.map((url) => fetch(url).then((response) => response.text()))
    );

    poemPromises.then((poems) => setPoems(poems));

    return () => setPoems(undefined);
  }, [fileUrls]);

  return poems;
}
