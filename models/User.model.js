const { Schema, model } = require("mongoose");

const userSchema = new Schema
  ({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  });

const User = model("User", userSchema);

module.exports = User;


/*   username: {
    type: String,
    unique: true,
    requiered: false,
    minlength: 3
  }, */