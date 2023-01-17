import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/users.js";
// import { authUser, createUser, deleteUser, getUserById, listUser, updateUser } from "./models/controllers/usersController.js";
import usersRouter from "./routers/usersRouter.js";
import productsRouter from "./routers/productsRouter.js";
import { authUser, createUser, deleteUser, findUser, getUserById, listUser, updateUser } from "./controllers/usersController.js";

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
//app.post("/api/users", createUser);
//app.get("/api/users", listUser);
//app.delete("/api/users/:id", deleteUser);
app.post("/test", (req, res) => {
    console.log("\n>>>>>>\n", req, "\n>>>>>>>\n");
  res.send(req.body);
});
//app.put("/api/users", updateUser);
//app.post("/api/auth/login", authUser);

// console.log("Hello Mern!");
app.use("/api/users",usersRouter);

app.use("/api/products",productsRouter);
//app.get("/api/users/:id",findUser);
app.listen(process.env.PORT, console.log(`Server is listening at port:${process.env.PORT}`));

app.post("/api/auth/login",authUser);


