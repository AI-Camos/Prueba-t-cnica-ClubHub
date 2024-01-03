# Prueba-t-cnica-ClubHub

## Instalacion

#### Nos bajamos el repositorio.
`$ git clone https://github.com/AI-Camos/Prueba-t-cnica-ClubHub.git`

#### Instalamos dependencias.
`npm intall`

#### Desplegamos la base de datos.
`docker compose up -d postgres`

#### Creamos un archivo .env, con las variables de entorno.
`PORT=3000
DB_USER='brandon'
DB_PASSWORD='admin123'
DB_HOST='localhost'
DB_NAME='hotel_data'
DB_PORT='5433'`

#### Ejecutamos las migraciones.
`npm run migrations:run`

#### Ejecutamos el programa.
`npm run dev`




