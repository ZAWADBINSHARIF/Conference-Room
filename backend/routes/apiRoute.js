// external import
import express from 'express'

// internal import
import { getAllTable, uploadPicture } from '../controllers/apiController.js'
import pictureUpload from '../middlewares/pictureUpload.js'
import multer from 'multer'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

router.get('/get_all_tables', getAllTable)
// router.get('/get_all_characters')


// router.post('/file', multer({ dest: "./../public" }).single('image'), (req, res) => {
//     console.log(req)
//     res.json({ok: "ok"})
// })

router.post('/upload_people_img', pictureUpload, uploadPicture)

export default router