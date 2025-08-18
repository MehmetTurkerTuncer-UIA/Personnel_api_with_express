"use strict";

const { version } = require('mongoose');

/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// Swagger Autogen
// https://swagger-autogen.github.io/docs/
/*
    $ npm i swagger-autogen # JSON creator
    $ npm i swagger-ui-express
    $ npm i swagger-jsdoc
    $ npm i redoc-express
    npm i swagger-autogen swagger-ui-express redoc-express 
*/


require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000




/* 
const options = {
    openapi:          <string>,     // Enable/Disable OpenAPI.                        By default is null
    language:         <string>,     // Change response language.                      By default is 'en-US'
    disableLogs:      <boolean>,    // Enable/Disable logs.                           By default is false
    autoHeaders:      <boolean>,    // Enable/Disable automatic headers recognition.  By default is true
    autoQuery:        <boolean>,    // Enable/Disable automatic query recognition.    By default is true
    autoBody:         <boolean>,    // Enable/Disable automatic body recognition.     By default is true
    writeOutputFile:  <boolean>     // Enable/Disable writing the output file.        By default is true
};
 */


/* ------------------------------------------------------- */
//const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0', language: 'en-US', disableLogs: false, autoHeaders: true, autoQuery: true, autoBody: true, writeOutputFile: true})
const swaggerAutogen = require('swagger-autogen')()

const packageJson = require('./package.json')

const document = {
  /*  
    info: {
        version: version, // by default: '1.0.0'
        title: 'Personnel API', // by default: 'REST API'
        description: 'Personnel API Documentation', // by default: ''
        termOfService: 'https://example.com/terms', // by default: ''
        contact: {
            name: 'Personnel API Support',
            url: 'https://example.com/support',
            email: 'mehmet@gmail.com',
            licence: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT'
            }                                                               
    }

    },
*/
     
    info: {
        version: packageJson.version, // by default: '1.0.0'
        title: packageJson.name, // by default: 'REST API'      
        description: packageJson.description, // by default: ''
        //termOfService: packageJson.termsOfService || 'https://example.com/terms', // by default: ''
        contact: {
            name: packageJson.author.name || 'Personnel API Support',
            url: packageJson.author.url || 'https://example.com/support',
            email: packageJson.author.email || '    
        },
        licence: {
            name: packageJson.license || 'MIT',
            url: packageJson.licenseUrl || 'https://opensource.org/licenses/MIT'
        },
        
        title: 'Personnel API', // by default: 'REST API'
        description: 'Personnel API Documentation', // by default: ''
        termOfService: 'https://example.com/terms', // by default: ''
        contact: {
            name: 'Personnel API Support',
            url: 'https://example.com/support',
            email: 'mehmet@gmail.com',
            licence: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT'
            }                                                               
    }

    },
    HOST: `${HOST}:${PORT}`,
    basePath: '/', // by default: '/'
    schemes: ['http', 'https'], // by default: ['http']
    // SimpleToken Settings
    securityDefinitions: {
            Token: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Enter your token in the format example: "Token your_token_here"'
        }
    },
    security: [
        {
            Token: []
        }
    ],
    definitions: {}
}

const routes = ["./index.js"]
const outputFile = "./swagger.json"

swaggerAutogen(outputFile, routes, document)
