const reqMiddleware = (req, res, next) => {
    console.table(['Request received at:', new Date().toISOString(),
        'Request method:', req.method,
        'Request URL:', req.originalUrl,
    ]);
    next();
}

module.exports = {
    reqMiddleware
};