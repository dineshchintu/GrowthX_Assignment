const User = require("./../models/user.model.js")
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require("jsonwebtoken")
async function createUser(user){
    const existingUser = await User.findOne({email:user.email});
    if (existingUser) {
        throw new Error("Email is already taken");
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(user.password, salt);
      const newUser = await User.create({...user,password:hashedPassword});
      return newUser;
  }
async function login({email,password}) {
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d'
  });
  console.log(user,token);
  return {user,token}
}
    module.exports ={createUser,login}