const express = require("express")
const router =  express.Router()
const {create,add,gettoptenleader,gethighestleader,getuser} = require('../controllers/userController')



router.post('/create',create)
router.get('/gettoptenleader',gettoptenleader)
router.get('/gethighestleader',gethighestleader)
router.get('/getuser/:slug',getuser)
router.put('/add/:slug',add)


module.exports=router