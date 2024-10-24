import express from "express";
import dotenv from 'dotenv'
import testRoute from "./routes/test.js";
import registerRoute from "./routes/register.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))
app.use(express.json());

//API routes
app.use("/test", testRoute);
app.use("/register", registerRoute);

//server start
app.listen(PORT, () => {
  console.log("Server is running at http://localhost:" + PORT);
})