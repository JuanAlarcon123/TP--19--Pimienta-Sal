var express = require('express');
var router = express.Router();

/* / */

const {index} = require('../controller/indexController')
router.get('/', index);

module.exports = router;
  