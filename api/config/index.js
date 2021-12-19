require('dotenv').config()

const config = {
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT
}
module.exports = config;