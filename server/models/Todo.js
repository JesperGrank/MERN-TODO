const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    text: {type: String, required: true},
    complete: {type: Boolean, default: false}
}, {timestamps: true})

const Todo = mongoose.model("Todo", TodoSchema)

exports.Todo = Todo