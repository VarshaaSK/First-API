//get the express package
const express = require("express");
const cors = require("cors");

//create an object for express
const app = express();

app.use(cors());

//process.env.PORT is used to tell that when running in online it has to adjust itself to that env than running in local host 3000;
const port = process.env.PORT || 3000;


//get data.json(i need api in response)
const apiData = require("./data.json");

//verves - get , post, delet ect
app.get("/" , (req,res) => {
    res.send("Hello, this is my first API");
});

//to get api as reponse on clicking services
app.get("/service", (req,res) => {
    res.send(apiData);
});


app.listen(port , () => {
    console.log("I am live again");
});