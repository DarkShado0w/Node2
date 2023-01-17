import { Router } from "express";
import { createUser, deleteUser, findUser, listUser, updateUser } from "../controllers/usersController.js";
const usersRouter = Router();
usersRouter.route("/").get(listUser).post(createUser);
usersRouter.route("/:id").get(findUser).put(updateUser).delete(deleteUser);
export default usersRouter;