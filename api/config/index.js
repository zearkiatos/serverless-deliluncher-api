require('dotenv').config()

const config = {
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_DATABASE_URI: process.env.MONGO_DATABASE_URI,
    DELILUNCHER_SECRET: process.env.DELILUNCHER_SECRET,
    EXPIRATION_TOKEN: process.env.EXPIRATION_TOKEN
}
module.exports = config;