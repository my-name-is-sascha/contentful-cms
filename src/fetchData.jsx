import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: '8hjeisht16s3',
  environment: 'master',
  accessToken: 'UoNmUGx_r4Dz8X9uWXom6USeMRnpKw6vCN8-ckQ44D4',
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
