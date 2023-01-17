const validateData = (schema) => async (req, res, next) => {
    const body = req.body;
  
    try {
      await schema.validate(body);
      next();
    } catch (error) {
       res.send({
        message: `Validation error occured!\n ${error.errors.join(",")}`,
      });
    }
  };
  
  export default validateData;