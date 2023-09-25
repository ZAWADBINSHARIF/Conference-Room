// external import
import express from 'express'

// internal import
import { getAllTable } from '../controllers/apiController.js'

const router = express.Router()

router.get('/get_all_tables', getAllTable)

export default router