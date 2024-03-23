const express = require('express');

const {PORT} = require('./config/serverConfig');

const setUpANdStartServer = async () => {
    const app = express();

    app.listen(PORT, (req, res) => {
        console.log(`server is running on port ${PORT}`);
        // console.log(process.env)
    });

};


setUpANdStartServer();