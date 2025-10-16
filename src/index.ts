import express from 'express'
import cors from 'cors'
import auth from './routes/auth'
import geo from './routes/geo'

const app = express()
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.json({ message: 'Hello from Express' }))

app.use('/api', auth)
app.use('/api', geo)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})