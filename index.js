//Dependencias
const express = require("express");
//Middleware
const morgan = require("morgan");
const notFound = require("./middleware/notFound");
const cors = require("./middleware/cors");
//Modulos
const app = express();

app.use(morgan('dev'));
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(notFound);
app.listen(process.env.PORT || 5000, ()=>{
    console.log("API viva, siuuu");
})