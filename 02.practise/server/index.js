const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const Schema = mongoose.Schema;
const app = express()
const port = 3000



app.use(cors())
app.use(express.json())

const foodsSchema = new Schema({
    title: String,
    description: String,
    image: String,
    price: Number
  });

  const foodsModel = mongoose.model("Foods", foodsSchema)


  //get all data
app.get('/foods', async(req, res) => {
    try {
        const response = await foodsModel.find({});
        res.json(response)
    } catch (error) {
        res.json({
           message: "error"
        })
    }
})


//get data by id
app.get('/foods/:id', async(req, res) => {
    const {id} =  req.params;
    try {
        const food = await foodsModel.findById(id);
        res.json(food)
    } catch (error) {
        res.json({
           message: "error"
        })
    }
})


//delete data by id
app.delete('/foods/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const deletedFood = await foodsModel.findByIdAndDelete(id);
        res.json(deletedFood)
    } catch (error) {
        res.json({
           message: "error"
        })
    }
})


//post data

app.post('/foods', async(req, res) => {
    try {
       const addNewFood = foodsModel({...req.body});
       await addNewFood.save()
        res.json(addNewFood)
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
