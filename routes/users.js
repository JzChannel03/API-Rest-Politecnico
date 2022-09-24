var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {
  await queryUsers((value) => {
    res.render('teacher', {arr: value, keys: Object.keys(value[0])});
  });
});

const connectDB = () => {
  const MYSQLDB = require('../helpers/mysqldb');
  return new MYSQLDB();
}

const queryUsers = (cb) => {
  return connectDB().query('SELECT * FROM Teacher', cb);
}

module.exports = router;
