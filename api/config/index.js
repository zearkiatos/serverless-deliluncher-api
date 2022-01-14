require('dotenv').config()

const config = {
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_DATABASE_URI: process.env.MONGO_DATABASE_URI,
    EXPIRATION_TOKEN: parseInt(process.env.EXPIRATION_TOKEN),
    DELILUNCHER_SECRET: process.env.DELILUNCHER_SECRET
}
module.exports = config;