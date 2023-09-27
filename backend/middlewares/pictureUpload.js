// external import
import multer from "multer"

// internal import
import singleUpload from "../utilities/singleUploader.js"

const pictureUpload = (req, res, next) => {
console.log(req.body)
    const upload = singleUpload(
        "people",
        ['image/jpg', 'image/png', 'image/jpeg'],
        '5',
        'Only .jpg .png or .jpeg file allowed!'
    )

    upload.any()(req, res, err => {
        if (err instanceof multer.MulterError || err) {
            res.status(500).json({
                errors: {
                    picture: {
                        msg: err
                    }
                }
            })
        } else
            next()
    })

}

export default pictureUpload