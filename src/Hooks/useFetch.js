import { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&apiKey=${apiKey}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        setData(data);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return [data, error];
}

export default useFetch;
