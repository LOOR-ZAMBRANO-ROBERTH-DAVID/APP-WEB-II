module.exports = (err, req,res,next) =>{

    const httpStatus =     err.status || 500;

    const httpMessage =  err.message || "Mensaje que no tenemos idea en el servidor"


    return res.status(httpStatus).send({
        status: httpStatus,
        message: httpMessage
    })

}