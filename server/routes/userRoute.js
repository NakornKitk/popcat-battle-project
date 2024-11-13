const express = require("express")
const router =  express.Router()
const {create,add,gettoptenleader,gethighestleader,getuser} = require('../controllers/userController')
const {requireLogin} = require('../controllers/authController')


router.post('/create',create)
router.get('/gettoptenleader',gettoptenleader)
router.get('/gethighestleader',gethighestleader)


router.get('/getuser/:slug',requireLogin,getuser)
router.put('/add/:slug',requireLogin,add)




module.exports=router