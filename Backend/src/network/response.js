exports.success = function (req, res, message, status=200) {

    res.status(status).send(
        message
    )
}

exports.error = function (req, res, message, details, status=400){
    console.log(details)
    res.status(status).send({
        error: message,
        body: ""
    })   
}