import { Router } from 'express'
import { getGeo } from '../controllers/geo'

const router = Router()

router.get('/geo', getGeo)

export default router
