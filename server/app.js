const express = require("express");
const mongoose = require("mongoose")
const {User} = require("./models/User")
const cors = require("cors")
const bodyParser = require("body-parser")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv").config()

const app = express()
const PORT = 3001;

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
// const JWT_SECRET = "781237812378123jkdsakjn12"

// app.use((req, _res, next) => {
//   const authHeader = req.header("Authorization")
//   if (authHeader) {
//     const token = authHeader.split(" ")[1]
//     req.user = jwt.verify(token, JWT_SECRET)
//   }
//   next()
// })

app.get("/", (req, res) => {
  res.json({message: "Hello worlld"})
})

app.post("/register", async (req, res) => {
  const {username, password} = req.body
  try{
    const user = new User({
      username,
      password
    })
    await user.save()
    console.log(`Userdata: ${user}`)
    res.json({ user });
  } catch(err){
    console.log(err)
    res.json("Username already taken")
  }
});

app.post("/login", async (req, res) => {
  // const {username, password} = req.body
  // const user = await User.login(username, password)
  // const userId = user._id.toString()
  // if(user){
  //   return (token = jwt.sign(
  //     { user: user.username, password },
  //     process.env.JWT_SECRET,
  //     { expiresIn: "1 h", subject: user }
  //   ));
  // }
  // console.log(`Username: ${username} - Password: ${password}`)

  const { username, password } = req.body;
    const user = await User.login(username, password);
    if (user) {
        const userId = user._id.toString();
        const token = jwt.sign(
            { userId, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "2 h", subject: userId }
        );
        console.log(user)
        console.log(token)
        res.json({ token });
    } else {
        res.json(401);
    }
})


mongoose.connect("mongodb://localhost/MERNTODO")

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});