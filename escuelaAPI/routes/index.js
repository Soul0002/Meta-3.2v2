const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const routesDirectory = path.join(__dirname, './');

fs.readdirSync(routesDirectory).forEach(file => {
    if (file !== 'index.js' && file.endsWith('.js')) {
        const routePath = path.join(routesDirectory, file);
        const routeModule = require(routePath);
        router.use(routeModule);
    }
});

module.exports = router;
