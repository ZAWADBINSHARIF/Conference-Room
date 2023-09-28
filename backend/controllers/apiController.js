// internal import
import { db } from "../configs/dbConnection.js"

// @desc upload character's picture and information
// route POST /api/people
// @access Public
async function uploadCharacterPicture(req, res) {
    const name = req.body.name
    const filename = req.files[0]?.filename || null
    const folder_name = req.folderName

    if (!name && !filename) {
        res.status(500).json({ errors: { msg: "File the name and image file" } })
        return
    }

    const sql = `INSERT INTO characters (id, name, filename, folder_name) VALUES (DEFAULT, ?, ?, ?)`
    const values = [name, filename, folder_name]

    try {
        await db.query(sql, values)
        res.status(200).json({ msg: "Character has been added" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: { msg: error } })
    }

}

// @desc upload table's picture and information
// route POST /api/table
// @access Public
async function uploadTablePicture(req, res) {
    const filename = req.files[0].filename

    const sql = `INSERT INTO tables (id, filename) VALUES (DEFAULT, ?)`
    const values = [filename]

    try {
        await db.query(sql, values)
        res.status(200).json({ msg: "Table has been added" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ errors: { msg: error } })
    }

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
    uploadCharacterPicture,
    getAllTable,
    uploadTablePicture
}