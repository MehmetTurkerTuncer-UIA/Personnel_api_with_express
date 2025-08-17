"use strict";
/* ------------------------------------------------------- */
// LOGGER
// https://expressjs.com/en/resources/middleware/morgan.html


/* ------------------------------------------------------- */
const morgan = require("morgan");

//app.use(  morgan('tiny'))
//app.use(  morgan('dev'))
//app.use(  morgan('short'))
//app.use(  morgan('common'))
//app.use(  morgan('combined'))
//app.use(morgan('TIME=":date[iso]" - URL=":url" - Method=":method" - IP=":remote-addr" - Ref=":referrer" - Status=":status" - Sign=":user-agent" (:response-time[digits] ms)'))

//! nodejs file system flags: BUNLAR ONEMLI BUNLAI ARASTIR ASAGIDA YAZDIGIMIZ a+ gibi 
// Write logs to a file:
const fs = require("node:fs");
const now = new Date()
// console.log(now, typeof now)
const today = now.toISOString().split('T')[0]
// console.log(today, typeof today)
//app.use(morgan('combined', {
//    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
//}))

module.exports = morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
})
