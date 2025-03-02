const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true
  },
  isActive: {
    type: Boolean,
    default:false
  },
  country: {
    type: String,
    default: 'Spain'
  },
  phone: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
});

userSchema.pre('save',  function(next){
  this.password = bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
})

const User = mongoose.model('User', userSchema);

module.exports = User;
