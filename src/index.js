const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const setUpANdStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, (req, res) => {
        console.log(`server is running on port ${PORT}`);
        // console.log(process.env)
    });
};


setUpANdStartServer();