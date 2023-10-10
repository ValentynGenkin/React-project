import { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&apiKey=${apiKey}`);

        if (!response.ok) {
          setError(`HTTP Error! Status: ${response.status}`);
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        setData(data);
        setError(null);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);
  return [data, error];
}

export default useFetch;
