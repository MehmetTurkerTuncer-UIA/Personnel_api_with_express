"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose@latest express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/


const express = require("express");
const {dbConnection} = require("./src/configs/dbConnection")
const app = express();

/*------------------------------------------------------- */

require("dotenv").config()
const PORT = process.env?.PORT || 8000

/*------------------------------------------------------- */



// asyncErrors to errorHandler:
require("express-async-errors");

/*------------------------------------------------------- */




// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

