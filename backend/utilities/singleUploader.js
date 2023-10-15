// external import
import multer from "multer"
import path from 'path'

const singleUpload = (
    subFolderName,
    allowedFileType,
    fileSizeLimit,
    errorMessage
) => {
    const __dirname = path.resolve()
    const uploadFolder = path.join(__dirname, "backend", "public", "uploads", subFolderName) // ! backend path will be removed for hosting

    const storage = multer.diskStorage({
        destination: function (req, file, cd) {
            cd(null, uploadFolder)
        },
        filename: function (req, file, cd) {
            const fileExt = path.extname(file.originalname)
            const filename = file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(" ")
            .join("-") +
            "-" +
            Date.now()
            
            cd(null, filename + fileExt)
        }

    })

    const upload = multer({
        storage,
        limits: {
            fileSize: fileSizeLimit * 1000000
        },
        fileFilter: function (req, file, cd) {
            if (allowedFileType.includes(file.mimetype)) {
                cd(null, true)
            } else {
                cd(errorMessage)
            }
        }
    })


    return upload

}

export default singleUpload