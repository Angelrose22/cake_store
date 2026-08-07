const multer = require("multer");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Cake = require("./models/Cake");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
// CREATE
mongoose.connect("mongodb://127.0.0.1:27017/CakeShopDB")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});
// Multer Configuration

const storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, "uploads/");

    },

    filename: function(req, file, cb) {

        cb(null, Date.now() + path.extname(file.originalname));

    }

});

const upload = multer({ storage: storage });
app.post("/cakes", upload.single("image"), async(req,res)=>{
     console.log("POST /cakes called");
    console.log(req.body);
    console.log(req.file);


    try{

        const cake = new Cake({

    name: req.body.name,

    description: req.body.description,

    price: req.body.price,

    weight: req.body.weight,

    image: req.file
        ? "/uploads/" + req.file.filename
        : ""

});

        await cake.save();

        res.status(201).json(cake);

    }

    catch(err){

        res.status(500).json({
            message:err.message
        });

    }

});


// READ - Get All Cakes

app.get("/cakes", async (req, res) => {

    try {

        const cakes = await Cake.find();

        res.json(cakes);

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

// READ - Get One Cake by ID

app.get("/cakes/:id", async (req, res) => {

    try {

        const cake = await Cake.findById(req.params.id);

        res.json(cake);

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

app.get("/", (req, res) => {
    res.send("Cake Shop Backend Running");
});
// UPDATE

app.put("/cakes/:id", upload.single("image"), async (req, res) => {

    try {

    const updatedCake = await Cake.findByIdAndUpdate(

        req.params.id,

        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            weight: req.body.weight,
            image: req.file
                ? "/uploads/" + req.file.filename
                : req.body.image
        },

        { new: true }

    );

    res.json(updatedCake);

}
catch(err){

    res.status(500).json({
        message: err.message
    });

}});
// DELETE

app.delete("/cakes/:id", async (req, res) => {

    try {

        await Cake.findByIdAndDelete(req.params.id);

        res.json({
            message: "Cake Deleted Successfully"
        });

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});