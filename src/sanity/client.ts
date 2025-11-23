import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
export const client = createClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2025-11-22',
    useCdn: false
})


const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};