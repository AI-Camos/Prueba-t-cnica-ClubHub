const axios = require('axios');
const cheerio = require('cheerio');

import('./scrapper.mjs').then((scrapperModule) => {
  // Accede a la función exportada
  const obtenerArticulo = scrapperModule.obtenerArticulo;

  // Define una función en tu archivo .js que recibe una URL
  async function scrapeWebsite(url) {
    try {
      // Llama a la función exportada del archivo .mjs
      await obtenerArticulo(url);
    } catch (error) {
      console.error('Error al hacer la consulta:', error);
    }
  }


// // Función para extraer información del sitio web
// async function scrapeWebsite(url) {
//   try {
//     await obtenerArticulo(url);
//     // const response = await axios.get(url);
//     // const $ = cheerio.load(response.data);

//     // // Extraer la URL de la imagen, logo o icono de la compañía
//     // const companyImageUrl = $('meta[property="og:image"]').attr('content');

//     // return { companyImageUrl };
//   } catch (error) {
//     console.error('Error al hacer web scraping:', error.message);
//     return {};
//   }
// }

// Función para validar la disponibilidad del sitio web
async function validateWebsiteAvailability(url) {
  try {
    const response = await axios.get(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

// Función para obtener información del dominio utilizando la API de SSL Labs
async function getSSLInfo(url) {
  try {
    const sslInfo = await axios.get(`https://api.ssllabs.com/api/v3/analyze?host=${url}`);
    return sslInfo.data;
  } catch (error) {
    console.error('Error al obtener información de SSL Labs:', error.message);
    return {};
  }
}

// Función principal para procesar la información de franquicias
async function processFranchises(franchises) {
  for (const franchise of franchises) {
    console.log(`Procesando franquicia: ${franchise.name}`);
    const { url } = franchise;

    // Realizar las operaciones necesarias con las funciones definidas anteriormente
    const websiteAvailability = await validateWebsiteAvailability(url);
    const websiteInfo = await scrapeWebsite(url);
    const sslInfo = await getSSLInfo(url);

    console.log('Disponibilidad del sitio web:', websiteAvailability);
    console.log('Información del sitio web:', websiteInfo);
    console.log('Información de SSL Labs:', sslInfo);
    console.log('---');
  }
}

// JSON proporcionado
const clubhubData = {
  "company": {
      "owner": {
          "first_name": "josh",
          "last_name": "porch",
          "contact": {
              "email": "josh@my-enterprise-holding.org",
              "phone": "+1 800 465 6574",
              "location": {
                  "city": "Toronto",
                  "country": "Canada",
                  "address": "14 bulevar",
                  "zip_code": "N6D 92A"
              }
          }
      },
      "informacion": {
          "name": "My entreprise holding",
          "tax_number": "DD79654121",
          "location": {
              "city": "Toronto",
              "country": "Canada",
              "address": "78 Rober ST",
              "zip_code": "F9A 92O"
          }
      },


  "franchises": [
      {
          "name": "Park royal",
          "url": "www.park-royalhotels.com",
          "location": {
              "city": "Cancun",
              "Country": "Mexico",
              "Address": "Libertadores av 40 - 20",
              "zip_code": "45971"
          }
      },
      {
          "name": "Marriot",
          "url": "www.marriott.com",
          "location": {
              "city": "Miami",
              "Country": "United States",
              "Address": "35 Tom st 18 bridge av",
              "zip_code": "115745"
          }
      }
  ]
  }
}


// Ejecutar la función principal con las franquicias
processFranchises(clubhubData.company.franchises);
