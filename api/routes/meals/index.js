const express = require('express');
const app = express();
const router = app.router();

router.get('/', (response, request) => {
    response.send('Hello orders 🛒');
});

router.post('/', (response, request) => {
    response.send('Post orders 📝');
});

module.exports = router;