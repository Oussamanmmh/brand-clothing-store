import { createClient } from 'next-sanity';

const client = createClient({
    apiVersion:'2024-08-04',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // Replace with your project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;