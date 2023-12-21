// internal import
import { db } from "../configs/dbConnection.js";

// @desc upload character's picture and information
// route POST /api/people
// @access Public
async function uploadCharacterPicture(req, res) {
    const name = req.body.name;
    const role = req.body.role;
    const filename = req.files[0]?.filename || null;
    const folder_name = req.folderName;
    const description = req.body.description;

    if (!name && !filename) {
        res.status(500).json({ errors: { msg: "File the name and image file" } });
        return;
    }

    const sql = `INSERT INTO characters (id, name, role, filename, folder_name, description) VALUES (DEFAULT, ?,?, ?, ?, ?)`;
    const values = [name, role, filename, folder_name, description];

    try {
        await db.query(sql, values);
        res.status(200).json({ msg: "Character has been added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: { msg: error } });
    }

}

// @desc upload table's picture and information
// route POST /api/table
// @access Public
async function uploadTablePicture(req, res) {
    const filename = req.files[0]?.filename || null;
    if (!filename) {
        res.status(500).json({ error: { msg: 'Fill the image' } });
        return;
    }

    const sql = `INSERT INTO tables (id, filename) VALUES (DEFAULT, ?)`;
    const values = [filename];

    try {
        await db.query(sql, values);
        res.status(200).json({ msg: "Table has been added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: { msg: error } });
    }

}

// @desc get all table pictures
// route GET  /api/tables
// @access Public
async function getAllTable(req, res) {
    const sql = 'SELECT * FROM tables';
    try {
        const data = await db.query(sql);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status.json(error);
    }
}

// @desc get all character pictures
// route GET  /api/characters
// @access Public
async function getAllCharacters(req, res) {
    const sql = 'SELECT * FROM characters';
    try {
        const data = await db.query(sql);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status.json(error);
    }

}

// @desc get save data
// route GET  /api/save_history
// @access Public
async function getSaveHistroy(req, res) {
    const sql = 'SELECT * FROM save_history';
    try {
        const data = await db.query(sql);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status.json(error);
    }
}

// @desc post save history
// route POST /api/save_history
// @access Public
async function postSaveHistory(req, res) {

    const data = req.body?.body;

    // ! delete all recodes of save-history Table
    let sql = 'DELETE FROM save_history';
    try {
        await db.query(sql);
    } catch (error) {
        console.log(error);
    }

    if (data.length == 0) {
        return res.status(200).json({ msg: "Data has been saved" });
    }

    sql = 'INSERT INTO save_history(id, draggable_id, name, role, src, position_x, position_y, folder_name) VALUES (?,?,?,?,?,?,?,?)';

    data.forEach(async (item) => {

        const value = [
            item.id,
            item.draggable_id,
            item.name,
            item.role,
            item.src,
            item.position_x,
            item.position_y,
            item.folder_name
        ];

        try {
            await db.query(sql, value);
        } catch (error) {
            console.log(error);
            res.status(500).json({ errors: { msg: error } });
        }
    });

    res.status(200).json({ msg: "Data has been saved" });
}

// @desc post save table
// route POST /api/save_table
// @access Public
async function postSaveTable(req, res) {
    const value = [req.body?.body];

    // ! delete all recodes of save-history Table
    let sql = 'DELETE FROM save_table';
    try {
        await db.query(sql);
    } catch (error) {
        console.log(error);
    }

    if (!value) {
        return res.status(200).json({ msg: "Data has been saved" });
    }

    sql = 'INSERT INTO save_table (filename) VALUES(?)';

    try {
        await db.query(sql, value);
        res.status(200).json({ msg: "Data has been saved" });
    } catch (error) {
        res.status(500).json({ errors: { msg: error } });
    }
}

// @desc get save table
// route POST /api/save_table
// @access Public
async function getSaveTable(req, res) {

    const sql = 'SELECT * FROM save_table';
    try {
        const data = await db.query(sql);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status.json(error);
    }
}

// @desc get all pdf
// route GET /api/pdf
// @access Public
async function getPDF(req, res) {

}

// @desc get all pdf
// route POST /api/pdf
// @access Public
async function postPDF(req, res) {
    const filename = req?.files[0]?.filename || null;
    const session_name = req.body?.session_name
    if (!filename) {
        res.status(500).json({ error: { msg: 'Fill the PDF' } });
        return;
    }


    const sql = `INSERT INTO pdfs (id, session_name, filename) VALUES (DEFAULT, ?, ?)`;
    const values = [session_name, filename];

    try {
        await db.query(sql, values);
        res.status(200).json({ msg: "Table has been added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ errors: { msg: error } });
    }

    // res.status(200).json('OK');
}

export {
    uploadCharacterPicture,
    getAllTable,
    uploadTablePicture,
    getAllCharacters,
    getSaveHistroy,
    postSaveHistory,
    getSaveTable,
    postSaveTable,
    getPDF,
    postPDF
};