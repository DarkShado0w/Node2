import * as yup from "yup";

const productSchema = yup.object().shape({
  productName: yup.string().min(5).max(20).required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().positive().min(200).required(),
  discount: yup.number().min(0),
  quantityInStock: yup.number().positive().required(),
  description: yup.string().required(),
  vendor: yup.string().required(),
});

export default productSchema;