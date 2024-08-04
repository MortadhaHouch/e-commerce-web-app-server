let express = require("express");
let dotenv = require("dotenv");
dotenv.config();
let app = express();
app.listen(3000,()=>console.log("server listening on port "+3000))