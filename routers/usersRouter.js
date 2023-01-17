import { Router } from "express";
import { createUser, deleteUser, findUser, listUser, updateUser } from "../controllers/usersController.js";
import validateData from "../middlewares/validation.js";
import userSchema from "../schemas/users.js";
const usersRouter = Router();
usersRouter.route("/").get(listUser).post(validateData(userSchema), createUser);
usersRouter.route("/:id").get(findUser).put(updateUser).delete(deleteUser);
export default usersRouter;