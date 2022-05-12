import { useEffect, useState } from "react";

export default function useFetch(
  fetching: () => Promise<any>,
  initData: any
): [result: any | Array<any>, isLoading: boolean, err?: Error] {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetching()
      .then((resultData) => setData(resultData))
      .catch((err) => setErr(err))
      .finally(() => setIsLoading(false));
  }, [fetching]);

  return [data, isLoading, err];
}
