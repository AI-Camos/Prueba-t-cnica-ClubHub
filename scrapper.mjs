// Cambia el nombre del archivo a scrapper.mjs

import { extract } from '@extractus/article-extractor';

async function obtenerArticulo(url) {
  try {
    const article = await extract(url);
    console.log(article);
  } catch (error) {
    console.error('Error al extraer el artículo:', error);
  }
}
export { obtenerArticulo };
