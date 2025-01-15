const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const Schema = mongoose.Schema;
const app = express()
const port = 4000;



app.use(cors());
app.use(express.json())
const shoesScheama = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

const shoesModel = mongoose.model("Shoes", shoesScheama)

// get all data
app.get('/shoes',  async(req, res) => {
    try {
        const response = await shoesModel.find({})
        res.json(response)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})


// get data by id
app.get('/shoes/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const shoes = await shoesModel.findById(id)
        res.json(shoes)
    } catch (error) {
        res.json({
           message: "error"
        })
    }
  })

  // delete data by id

  app.delete('/shoes/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedShoes = await shoesModel.findByIdAndDelete(id)
        res.json(deletedShoes)
    } catch (error) {
        res.json({
           message: "error"
        })
    }
  })


  // post data

- app.post('/shoes',  async(req, res) => {
   
    try {
        const addNewShoes = shoesModel({...req.body})
        await addNewShoes.save()
        res.json(addNewShoes)
    } catch (error) {
        res.json({
           message: "error"
        })
    }
  })



  
mongoose.connect("mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
});

