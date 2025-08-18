"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const router = require('express').Router()

const auth = require('../controllers/auth.controller')

/* ------------------------------------------------------- */

// URL: /auth

router.post('/login', auth.login)
//router.all('/logout', auth.logout)  // swaggerAutogen all() ve use() metodunlarini yakalamaz
router.get('/logout', auth.logout)  // swaggerAutogen all() metodunu yakalamaz

/* ------------------------------------------------------- */
module.exports = router