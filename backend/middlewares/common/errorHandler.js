export default function errorHandler(err, req, res, next) {
    if (err)
        res.status(500).json({ errors: err })
}