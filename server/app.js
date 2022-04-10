const express = require("express");
const mongoose = require("mongoose")
const {User} = require("./models/User")
const cors = require("cors")
const bodyParser = require("body-parser")


const app = express()
const PORT = 3001;
app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
  res.json({message: "Hello World"})
})

app.post("/register", async (req, res) => {
  const {username, password} = req.body
  try{
    const user = new User({
      username,
      password
    })
    await user.save()
  } catch(user){
    res.json({username, password})
  }
});


mongoose.connect("mongodb://localhost/MERNTODO")

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});