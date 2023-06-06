module.exports = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(res.status(404).json({
        code: 404,
        message: "Route not found",
    }));
}