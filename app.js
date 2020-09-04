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
app.post('/about', function(req,res){
    // res.end(JSON.stringify(req.body))
    console.log(req.body.nameData)
    console.log(req.body.emailData)
    var name= req.body.nameData;
    var email=req.body.emailData;
    res.render('pages/about',{
        obj1=name,
        obj2=email
    })

})

app.get('/about', function(req,res){
    res.render('pages/about')
})

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`)
})



