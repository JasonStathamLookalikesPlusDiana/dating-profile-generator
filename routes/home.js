const router = require('express').Router();

router.get('/',(req,res) => {
  res.render('index');
});


router.get('/form/:page',(req,res) => {
  res.render('user/userinfo_' + req.params.page);
})

module.exports = router;
