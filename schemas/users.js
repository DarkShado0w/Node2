import * as yup from "yup";

// const yup = require("yup");

const userSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required(),
});

export default userSchema;