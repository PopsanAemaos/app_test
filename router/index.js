const express = require('express')
const axios = require('axios').default;
const app = express()

app.set('trust proxy', true);

const requestIp = require('request-ip');
 
// inside middleware handler
app.get('/', async (req, res) => {
    // const response = await axios.get('https://ifconfig.co/json');
    console.log('hello Docker WTF app port 4000');
    res.json('hello Docker WTF app port 4000', requestIp)
})

module.exports = app