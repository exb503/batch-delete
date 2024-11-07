require('dotenv').config();
module.exports = {
    apiKey: process.env.APPLITOOLS_API_KEY,
    browser: [
        { width: 1024, height: 768, name: 'chrome'}
    ],
    batchName: 'Liz Cypress Test'
}