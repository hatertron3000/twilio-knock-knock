const http = require('http')
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse
    const body = req.body.Body.toLowerCase()
    const haiku = `O snail
    Climb Mount Fuji,
        But slowly, slowly!`

    switch (body) {
        case 'joke':
            twiml.message("Knock Knock")
            break
        case "who's there":
            twiml.message("Hike")
            break
        case "hike who":
            twiml.message(haiku)
            break
        default:
            twiml.message("That's not how you play knock knock. Try again.")
    }

    console.log(req.body.Body)

    res.writeHead(200, { 'Content-Type': 'text/xml' })
    res.end(twiml.toString())
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})