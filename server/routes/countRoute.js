const express = require("express")
const router =  express.Router()
const {add,get} = require('../controllers/countController')


router.put('/add',add)
router.get('/get',get)


module.exports=router