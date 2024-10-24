import express from "express";
const app = express();

app.get("/", (req,res,next)=>{
  console.log("Hitting TestAPI")
  res.send("Test OK!");
})

export default app;