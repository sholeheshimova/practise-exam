const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express()
const port = 4000


app.use(cors())
app.use(express.json())

const clothesSchema = new Schema({
    title: String,
    image: String,
    price: Number
  });

  const clothesModel = mongoose.model("Clothes", clothesSchema);


  app.get('/clothes',  async(req, res) => {
    try {
        const response = await clothesModel.find({})
        res.json(response)
    } catch (error) {
        res.json({
          message: "error"
        })
    }
})

app.get('/clothes/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const response = await clothesModel.findById(id)
        res.json(response)
    } catch (error) {
        res.json({
          message: "error"
        })
    }
})

app.delete('/clothes/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedCloth = await clothesModel.findByIdAndDelete(id)
        res.json(deletedCloth)
    } catch (error) {
        res.json({
          message: "error"
        })
    }
})

app.post('/clothes',  async(req, res) => {
try {
    const clothes = clothesModel({...req.body})
    await clothes.save()
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
