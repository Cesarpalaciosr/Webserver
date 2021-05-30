const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index.js')

/*
router.get('/', (req, res) =>{
    res.render('index');
});
*/
router.get('/', indexController.index);


module.exports = router;