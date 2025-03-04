import { useCallback, useEffect, useState } from "react";
import { toMatches } from "../transformers/toMatches";
import { Match } from "../types/match";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useFetchMatches = () => {
  const [data, setData] = useState<Match[] | null>(null);
  const [isUninitialized, setIsUninitialized] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsUninitialized(false);
    setIsLoading(true);

    fetch(`${BASE_URL}/fronttemp`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        const data = await response.json();
        return toMatches(data);
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setData(null);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const refresh = useCallback(() => {
    setIsError(false);
    setIsUninitialized(false);
    setIsLoading(true);

    fetch(`${BASE_URL}/fronttemp`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        const data = await response.json();
        return toMatches(data);
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setData(null);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, isUninitialized, isError, isLoading, refresh };
};

export default useFetchMatches;
