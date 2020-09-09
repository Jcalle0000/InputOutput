const express=require('express')
const router=express.Router()

router.get('/', function(req,res){
    // res.send('Book results')
    // we need to pass objDate or else this link wont work
    // And we have this variable passed in the post
    // b/c we passed it as a variable in post forum with aboutbook.ejs
    var someDate= Date.now()
    // var month = someDate.prototype.getMonth()
    console.log(someDate)
    res.render('pages/bookResult',{
        objDate:someDate
    })
})

/* this post allows us to recieve data from 
    aboutbook.ejs through routes/books
*/ 
router.post('/', function(req,res){
    console.log(req.body.publishDate);
    var date= req.body.publishDate
    // var date2=Date(date)           
    console.log(date)
    res.render('pages/bookResult', {
        objDate:date
    })
})

module.exports=router