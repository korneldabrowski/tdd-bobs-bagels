import express from 'express'
import bodyParser from 'body-parser'
import routes from './src/routes/index.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
