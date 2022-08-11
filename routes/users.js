var express = require('express');
var router = express.Router();

/* /user. */
const {user} = require('../controller/userController')
router.get('/',user);

module.exports = router;
