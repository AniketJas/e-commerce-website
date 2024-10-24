import express from "express";
import mongoose from "mongoose"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt';
import UserModel from "../models/UserSchema.js";

dotenv.config();

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);
const URI = process.env.MONGO_URL;

app.post("/", async (req, res, next) => {

  await mongoose.connect(URI)
    .then(() => {
      console.log("Database connected.")
    })
    .catch((error) => {
      console.error(error);
    })

  console.log("Hitting RegisterAPI.");

  const { name, email, mobno, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, bcryptSalt)

  const userData = await UserModel.findOne({ email })

  if (userData) {
    res.status(200).json("email found")
    return;
  }

  try {
    const userData = await UserModel.create({
      name,
      email,
      mobno,
      password: hashPassword
    })
    console.log("User Added Successfully!!")
    res.json(userData)
  }
  catch (err) {
    res.status(422).json(err);
  }
  console.log("Exited!")
})

export default app;