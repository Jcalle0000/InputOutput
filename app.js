const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const { response } = require('express')
const port=3401

app.use(bodyParser.json() ) // is this needed?
app.use(bodyParser.urlencoded({ extended:true }) )

// for our html with JS
app.set('view engine', 'ejs')
// For our css
app.use('/assets', express.static('assets')) 
// routes
app.get('/', function(req,res) {
    // res.send('Hello World')
    res.render('pages/index')
})
var person={
    fname:'Tanmay',
    lname:'Sarkar',
    addres:{
        add1:'my home address',
        add2:'my office address'
    }
}
// using person variable
app.get('/parsing', function(req,res){
    res.json(person)
    // res.render('pages/about')
    console.log('user accessing json parsing page')
})


app.post('/', function(req,res){
    
    // console.log(JSON.stringify(req.body.name) )
    // console.log(req.body.email)
    // res.render('pages/index')
    res.end(JSON.stringify(req.body) )
})

// inside index.ejs
// this is from the action=post"/about""
/* This is how we send data MAIN to About */
app.post('/about', function(req,res){
    // res.end(JSON.stringify(req.body))
    console.log("Through post"+req.body.nameData) // request data coming in
    console.log("Through post"+req.body.emailData)
    var name= req.body.nameData;
    var email=req.body.emailData;
    // console.log("name is: "+name)
    // console.log("Email is: "+ email)

    res.render('pages/about', { // we send this data to about
        name:name,
        email:email

    })
    console.log("Sending data ^ from main to about")

})
// This is how we get Data from MAIN to ABOUT
app.get('/about', function(req,res){
    console.log('getting data from Main to about')
    // these are the variables show in the ejs files
    // if you go straight into the about page and bypassing evertyhing
    // default values show
    
    var name="default"
    var email="default"
    res.render('pages/about', {
        name:name,
        email:email
        // email:req.body.email
    })
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})



