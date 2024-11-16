const app = require("./app.js");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config();

app.listen(8080,()=>{
    console.log(`server started on port 8080`);
})
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("server succesfully connected to mongodb");
}).catch((err)=>{
    console.log(err.message);
})


