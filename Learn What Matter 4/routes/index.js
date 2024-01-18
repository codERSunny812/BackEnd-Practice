var express = require('express');
const UserModal = require('./Db')
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// CRUD in the DB
router.get('/createuser',async(req,res) => {
  const userData = await UserModal.create({
    userName:"codersunny1",
    name:"sunnny1",
    age:22,
});
res.send(userData);
})

router.get('/findalluser',async (req,res)=>{
  const allUser = await UserModal.find();
  res.send(allUser);

})



module.exports = router;
