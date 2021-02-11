const express = require('express')
const app = express()

app.use(express.json())

app.use('/api/v1/', require('./routes/route'))

app.listen(5000, console.log(' SERVER IS RUNNING ON PORT 5000'))