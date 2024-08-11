import { createClient } from 'next-sanity';

const client = createClient({
  apiVersion:'2024-08-04',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
  token:"skZ2pWZxpj5n85yxZTRLWrzKFKY3JqpGuAc40QJyNRWYhzNlNTrElcm0fXxfmboAxqT4MF78pMUOeWE8srKIVUIVn3JGdNt7QiLynp2EYY8ffB21D6TPkpmTffOTZ1nZacyZmbJcUspxTsAegkec5QocwsNxjgl1JKa7HleXqZELhft6Tn6s"
});

export default client;