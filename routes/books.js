const express=require('express')
const router=express.Router()
// const Book=require('../models/book')

router.get('/', function (req,res){
    // res.send('All books')
    try{
        res.render('pages/aboutbook', {

        })
        console.log('pages/aboutbook')
    } catch {
        console.log("failed to renders from routes/book.js")
    }
    
})

module.exports=router 