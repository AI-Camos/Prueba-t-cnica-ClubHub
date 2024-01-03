// Cambia el nombre del archivo a scrapper.mjs

import { extract } from '@extractus/article-extractor';


function obtenerArticulo(url) {
    return extract(url);
}

module.exports = { obtenerArticulo };
