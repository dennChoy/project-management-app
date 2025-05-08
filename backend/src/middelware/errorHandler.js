const errorHandling = (err, req, res, next) => {

    res.status(500).json({
        status: 500,
        message: "Something went wrong" + JSON.stringify(res),
        error: err.message
    });
};

export default errorHandling;