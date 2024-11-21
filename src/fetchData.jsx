import { createClient } from 'contentful';

const client = createClient({
  space: '8hjeisht16s3',
  environment: 'master',
  accessToken: 'UoNmUGx_r4Dz8X9uWXom6USeMRnpKw6vCN8-ckQ44D4',
});

client.getEntries({ content_type: 'projects' }).then((response) => {
  console.log(response);
});
