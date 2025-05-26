import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {type: String, reqired: true},
  email: {type: String, required: true},
  password: {type: String},
  gId:{type: String}
});

module.exports = mongoose.model('User', userSchema);
