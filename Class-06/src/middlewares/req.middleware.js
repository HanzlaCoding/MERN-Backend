const reqMiddleware = (req, res, next) => {
    console.table(
        [
            `Body: ${req.body}`,
            `Status: ${req.status}`,
            `Url: ${req.originalUrl}`
        ]
    )

    next()
}

module.exports = { reqMiddleware }