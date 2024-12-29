const port = 4000;
const express = require("express");
const app = express();
const mongoose = require ("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());
// database connection
mongoose.connect("mongodb+srv://staines:mongodb@ecommercedb.npilc.mongodb.net/New Folder");

// api craetion
app.get("/",(req,res)=>{
res.send("express app is running ")

})
app.listen(port,(error)=>{
    if (!error){
        console.log("server running on port "+port);
    }
    else{
        console.log("error"+error)
    }
})
// image storage engine 

const storage = multer.diskStorage({
    destination : './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file,fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// creating uploadong endpoint for images
app.use('/images',express.static())
app.post("/upload",upload.single('product'),(req,res)=>{
res.json({
    success:1,
    image_url:``

})
}
)