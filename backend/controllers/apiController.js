// internal import
import { db } from "../configs/dbConnection.js"

// @desc upload pictures
// route POST /api/upload
// @access Public
function uploadPicture(req, res) {
    console.log(req.files)
    console.log(req.body)
    res.status(200).json({msg: "yes"})
}

// @desc get all table pictures
// route GET  /api/get_all_tables
// @access Public
function getAllTable(req, res) {
    res.send("<h1>Tables</h1>")
}

// @desc get all character pictures
// route GET  /api/get_all_characters
// @access Public
function getAllCharacters(req, res) {
    res.send("<h1>Characters</h1>")
}

// @desc get save data
// route GET  /api/save_data
// @access Public
function getSaveData(req, res) {
    res.send("<h1>Save Data</h1>")
}

// @desc post save data
// route POST /api/save_data
// @access Public
function postSaveData(req, res) {
    res.send("<h1>Post Save Data</h1>")
}

export {
    uploadPicture,
    getAllTable
}