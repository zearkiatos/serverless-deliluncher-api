require('dotenv').config()

const config = {
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT,
    MONGO_DATABASE_URI: process.env.MONGO_DATABASE_URI
}
module.exports = config;