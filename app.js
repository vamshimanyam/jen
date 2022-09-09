const { request } = require('express');
var express = require('express');
var app=express();
const port =3001;


app.get("/",(req,res)=>{
    res.send("hello user")
})

var server=app.listen(port,function(){
    //console.log("Server Started on port 5000")
})

module.exports = server
