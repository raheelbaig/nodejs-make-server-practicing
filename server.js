const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    app.send("HI, How are you.../help, /contact")
})
app.get('/help',(req,res) => {
    app.send("What's problem?")
})
app.get('contact',(req,res) => {
    app.send("baig8911@gmail.com")
})

app.listen(port,() => {
    console.log(`http:localhost:${port}`);
})