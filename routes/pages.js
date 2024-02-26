const express = require('express');

const router = express.Router();

router.get('/', (req, resp) => {
    resp.render('index');
})

router.get('/register', (req, resp) => {
    resp.render('register');
})

router.get('/login', (req, resp) => {
    resp.render('login');
})

module.exports = router;