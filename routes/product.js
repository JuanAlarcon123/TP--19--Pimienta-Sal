var express = require('express');
var router = express.Router();

const {detail} = require('../controller/productController')

router
    .get('/detail/:id', detail )



module.exports = router