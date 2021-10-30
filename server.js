const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.send("HI, How are you.../help, /contact")
})
app.get('/help',(req,res) => {
    res.send("What's problem?")
})
app.get('contact',(req,res) => {
    res.send("baig8911@gmail.com")
})

app.listen(port,() => {
    console.log(`http:localhost:${port}`);
})