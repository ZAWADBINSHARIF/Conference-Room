// external import
import multer from "multer";

// internal import
import singleUpload from "../utilities/singleUploader.js";

const pdfUpload = (req, res, next) => {
    const upload = singleUpload(
        'pdfs',
        ['application/pdf'],
        '100',
        'Only .pdf file allowed'
    );

    upload.any()(req, res, err => {
        if (err instanceof multer.MulterError || err) {
            res.status(500).json({
                errors: {
                    pdf: {
                        msg: err
                    }
                }
            });
        } else {
            next();
        }
    });
};

export default pdfUpload;