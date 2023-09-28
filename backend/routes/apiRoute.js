// external import
import express from 'express'

// internal import
import {
    getAllTable,
    uploadCharacterPicture,
    uploadTablePicture,
    getAllCharacters,
    getSaveHistroy,
    getSaveTable,
    postSaveTable,
    postSaveHistory
} from '../controllers/apiController.js'
import pictureUpload from '../middlewares/pictureUpload.js'

const router = express.Router()

const setFolderName = (name) => (
    function (req, res, next) {
        req.folderName = name
        next()
    }
)

router.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

// GET router
router.get('/characters', getAllCharacters)
router.get('/tables', getAllTable)
router.get('/save_history', getSaveHistroy)
router.get('/save_table', getSaveTable)


// POST router
router.post('/people', setFolderName('people'), pictureUpload, uploadCharacterPicture)
router.post('/dogs', setFolderName('dogs'), pictureUpload, uploadCharacterPicture)
router.post('/tables', setFolderName('tables'), pictureUpload, uploadTablePicture)
router.post('/save_history', postSaveHistory)
router.post('/save_table', postSaveTable)

export default router