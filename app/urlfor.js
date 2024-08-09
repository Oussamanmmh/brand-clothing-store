import imageUrlBuilder from '@sanity/image-url';
import client from '@/app/sanity'; // Adjust the import path to your Sanity client configuration

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}