import axios from 'axios';
import { useState, useCallback } from 'react';

function useHttp(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      return response;
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [url]);

  return { loading, error, sendRequest };
}

export default useHttp;
