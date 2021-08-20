const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
app.use('/', express.static('main.html'))
app.use(express.urlencoded())
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'main.html'));
app.get('/', (req,res)=>{
    const con = "This is best";
    const params = {'title': 'pubg', 'content': con}
    res.status(200).render('main.html',params);
})
app.post('/', (req,res)=>{
    name = req.body.name;
    email = req.body.email;
    bookname = req.body.bookname;
    let outputToWrite  = `The name of student is ${name} , E-Mail address is ${email} and book he requires is ${bookname}.`; 
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully.'}
    res.status(200).render('main.html',params);
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});