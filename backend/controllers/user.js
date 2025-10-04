const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const {setUser} = require('../service/auth')


async function handleUserSignUp(req, res) {

    const { username, email, password, role } = req.body;

    const exsistingUser = await User.findOne({ email });

    if (exsistingUser) {
        return res.status(409).json({ msg: "User Already Exsist" })
    }

    const hashpassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        username,
        email,
        password: hashpassword,
        role: role || 'user'
    })
    
   return  res.status(200).json({ msg: "User Registered Successfully" })
}

async function HandleUserLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid username or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

    // Generate token
    const token = setUser(user);

    return res.status(200).json({ 
      msg: "Successfully Logged In!", 
      token, 
      role: user.role // 👈 return role so frontend can check
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {handleUserSignUp, HandleUserLogin}