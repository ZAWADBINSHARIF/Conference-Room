// external import
import express from 'express'

// internal import
import { getAllTable, uploadCharacterPicture, uploadTablePicture } from '../controllers/apiController.js'
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

router.get('/get_all_tables', getAllTable)


// POST route
router.post('/people', setFolderName('people'), pictureUpload, uploadCharacterPicture)
router.post('/dogs', setFolderName('dogs'), pictureUpload, uploadCharacterPicture)
router.post('/tables', setFolderName('tables'), pictureUpload, uploadTablePicture)

export default router