import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const ref = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    return () => {
      ref.current = false;
    };
  }, []);
  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (ref.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      });
  }, [url]);
  return state;
};
