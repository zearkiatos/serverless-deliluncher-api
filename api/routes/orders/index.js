const express = require('express');
const app = express();
const router = app.router();

router.get('/', (response, request) => {
    response.send('Hello meals🍔');
});

router.post('/', (response, request) => {
    response.send('Post meals 🍱');
});

module.exports = router;