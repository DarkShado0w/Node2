import asyncHandler from "express-async-handler";
import User from "../models/users.js";
export const createUser = asyncHandler((req, res) => {
    const{ fullName,email,password, ...rest } = req.body;
  User.create({
   fullName,
   email,
   password,
  })
  .then((response) => {
      res.send({ message:"User created!"});
    console.log(response);
  })
    .catch((err) => {console.log(err)
      res.send({message:"Error user created"});
  });
});
export const listUser = asyncHandler(
    (req, res) => {
        User.find({
    }).then((response) => {
        res.send({
            message: "user listed",
            users: response,
        });
        console.log(response);
      })
      .catch((err) => {
          res.send({
              message: "Errors getting users",
              users: JSON.stringify(err),
          });
          console.log(err)});
      }
);
export const getUserById = asyncHandler(
    (req, res) => {
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
      }
);
export const updateUser = asyncHandler(
    (req, res) => {
        const{ fullName,email,password, ...rest } = req.body;
        // console.log("\n>>>>>>\n", req, "\n>>>>>>>\n");
      User.findOneAndUpdate( { email },{
       fullName,
       email,
       password,
      }).then(response => {console.log(response)
        res.send({message:"User Updated!"});
      })
        .catch((err )=> {console.log(err)});
        res.send({message:"Error Updating!"});   
    }
);
export const deleteUser = asyncHandler(
    (req, res) => {
        const { id } = req.params;
          User.findOneAndDelete({_id:id})
          .then((response) => {
          res.send({
              message: "user deleted",
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
      }
);
export const authUser = asyncHandler(
    (req, res) => {
        const { email, password} = req.body;
        User.findOne({ email }).then(response => {
           if(response.password === password)
           {
            res.send({message: "User authenticated!" });
           }
           else
           { res.send({message:"Wrong password"});}
          
        }).catch(err => {
            res.send({
            message: "Invalid Email, no user found"
            });
        })
    }
);
export const findUser = asyncHandler((req, res) => {
    const { id } = req.params;
    User.findById(id)
      .then((response) => {
        res.send({
          message: "User retrieved!",
          user: response,
        });
        console.log(response);
      })
      .catch((err) => {
        res.send({
          message: "Error getting user!",
          users: JSON.stringify(err),
        });
        console.log(err);
      });
  });
  