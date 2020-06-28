import React, { useState, useEffect } from 'react';
import { HookCallbacks } from 'async_hooks';

type ReturnProps<T> = {
  data: Array<T> | object | null;
  hasError: boolean;
  isloading: boolean;
  errorMessage: string;
  initParams: object;
  updateURL: (URL: string) => void;
  updateParams: Function;
  refetch: Function;
}
type Dictionary = {
  [key: string]: any;
}

const useFetch: <T> (initialURL: string, initParams?: object, skip?: boolean) =>
  ReturnProps<T> = (initialURL, initParams = {}, skip = false) => {
    const [url, updateURL] = useState(initialURL);
    const [data, setData] = useState(null);
    const [params, updateParams] = useState<Dictionary>(initParams);
    const [hasError, setHasError] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [refetchIndex, setRefetchIndex] = useState(0);
    const queryString = Object.keys(params)
      // eslint-disable-next-line
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');

    const refetch = (): void => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

    useEffect(() => {
      const fetchData = (): void => {
        if (skip) return;
        setIsloading(true);
        fetch(`${url}${queryString}`)
          .then(res => res.json())
          .then(res => {
            if (res.success) {
              setData(res.data);
              setIsloading(false);
            } else {
              setHasError(true);
              setIsloading(false);
              setErrorMessage(res.message);
            }
          })
          .catch((err) => {
            setHasError(true);
            setIsloading(false);
            setErrorMessage(err.message);
          });
      };
      fetchData();
    }, [url, params, refetchIndex]);

    return {
      data, hasError, isloading, errorMessage, updateURL, updateParams, refetch, initParams,
    };
  };

export default useFetch;
