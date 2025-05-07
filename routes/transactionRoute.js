const express=require('express')
const { addTransaction, getAllTransaction } = require('../controllers/transactionController')

//router object
const router=express.Router()

router.post('/add-transaction',addTransaction)
router.post('/get-transaction',getAllTransaction)

module.exports=router