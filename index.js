const express = require('express')

const app = express()
app.use(express.json())
app.use(express.static('build'))

app.post('/move', async (req, res) => {
    const {x = 0, y = 0} = req.body
    res.status(200).json({x, y})
})

app.listen(4000, () => {
    console.log('Server works!')
})
