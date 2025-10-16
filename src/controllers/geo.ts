import { Request, Response } from 'express'
import axios from 'axios'
import { isIP } from 'net'

export async function getGeo(req: Request, res: Response) {
  try {
    const ip = typeof req.query.ip === 'string' ? req.query.ip : undefined

    if (ip && isIP(ip) === 0) return res.status(400).json({ message: 'Invalid IP address' })

    const path = ip ? `/${ip}/geo` : '/geo'
    const url = `https://ipinfo.io${path}`
    const response = await axios.get(url, { timeout: 5000 })
    return res.json(response.data)
  } catch (err: any) {
    if (err.response) return res.status(err.response.status).json(err.response.data)
    return res.status(502).json({ message: 'Failed to fetch geo info', details: err.message })
  }
}
