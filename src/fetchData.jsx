import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const data = response.items.map((item) => {
        const id = item.sys.id;
        const { title, description, image } = item.fields;
        const img = image?.fields?.file?.url;

        return { id, title, description, img };
      });

      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, data };
};
