// @desc get all table pictures
// route GET  /api/get_all_tables
// @access Public
function getAllTable(req, res) {
    res.send("<h1>Tables</h1>")
}

export {
    getAllTable
}