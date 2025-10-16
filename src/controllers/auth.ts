import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { users } from '../data/users'

const JWT_SECRET = 'jlabs-secret-key-2024'

export function login(req: Request, res: Response) {
  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ message: 'email and password required' })

  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) return res.status(401).json({ message: 'Invalid credentials' })

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' })
  return res.json({ token, user: { id: user.id, email: user.email, name: user.name } })
}
