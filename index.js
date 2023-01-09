import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
(async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  })();
app.get("/", (req, res) => {
  //   res.send("API is running, fine, have a good day...");
  res.send({ message: "Hello , its your first get request!", 
  status: "fine", 
});
});

app.post("/test", (req, res) => {
  res.send(req.body);
});

app.listen(3005, console.log("Express app serverd at 3005"));
// console.log("Hello Mern!");