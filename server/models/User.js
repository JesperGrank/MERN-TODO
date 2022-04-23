const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true}
})

UserSchema.pre('save', async function(next){
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
        next()
    }
)

UserSchema.statics.login = async function(username, password){
    const user = await this.findOne({username})
    if (user && await bcrypt.compare(password, user.password)){
        return user
    }
    return null
    // Samma som User.FindOne()
}

const User = mongoose.model("User", UserSchema)

exports.User = User