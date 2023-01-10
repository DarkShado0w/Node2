import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/users.js";
import { authUser, createUser, deleteUser, listUser, updateUser } from "./models/controllers/usersController.js";

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
app.post("/api/users", createUser);

app.get("/api/users", listUser);
app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
    User.findById({})
    .then((response) => {
    res.send({
        message: "user retrieved",
        user: response,
    });
    console.log(response);
})
.catch((err) => {
    res.send({
        message: "Errors getting users",
        users: JSON.stringify(err),
    });
    console.log(err)});
});
app.delete("/api/users/:id", deleteUser);
app.post("/test", (req, res) => {
    console.log("\n>>>>>>\n", req, "\n>>>>>>>\n");
  res.send(req.body);
});

app.put("/api/users", updateUser);
app.post("/api/auth/login", authUser);
app.listen(process.env.PORT, console.log(`Express app serverd at 3005:${process.env.PORT}`));
// console.log("Hello Mern!");