const router = require('express').Router();

router.get('/',(req,res) => {
  res.render('index');
});


router.get('/form/:page',(req,res) => {
  res.render('user/userinfo_' + req.params.page);
})

router.get('/profile',(req,res) =>{
	res.render('profiles/profile')
})


module.exports = router;
