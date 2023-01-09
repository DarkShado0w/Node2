import express from "express";

const app = express();

app.use(express.json());

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