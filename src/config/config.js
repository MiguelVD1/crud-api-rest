require('dotenv').config();


//llamamos todos las cosas del archivo env y las importamos con variables 
const config = {
    env:process.env.NODE_ENV || 'dev',
    port: process.env.port || 3000,
    dbHost:process.env.DB_HOST,
    dbName:process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT
}

module.exports={config};// exportamos config