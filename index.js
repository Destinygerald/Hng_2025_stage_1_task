const express = require('express')
const cors = require('cors')
const Route = require('./route.js')

require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors({
	origin: "*",
	credentials: true
}))


app.use('/api', Route)


app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))