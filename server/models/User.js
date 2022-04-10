const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

UserSchema.pre(
    'save',
    async function(next){
        this.password=await bcrypt.hash(this.password, 10)
        next()
    }
)

const User = mongoose.model("User", UserSchema)

exports.User = User