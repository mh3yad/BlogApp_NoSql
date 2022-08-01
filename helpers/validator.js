module.exports = (schema) => {
        return (req,res,next) => {
          
            let validationResult = schema.body.validate(req.body);
            let error = [];
          
            if(validationResult.error){
                
                error.push(validationResult.error.details[0].message)
               
            }
            if(error.length){
                res.status(400).json({message:error.join()})
                return
            }
            
            next()
        }
}