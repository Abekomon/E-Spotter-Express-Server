const fetch = require('node-fetch')
const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.get('/', cors(), async (req, res) => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const response = await fetch(`https://api.pandascore.co/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo`, options)
  const body = await response.json()
  res.send(body)
})

app.get('/:game', cors(), async (req, res) => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const response = await fetch(`https://api.pandascore.co/${req.params.game}/tournaments/upcoming?token=gUY8h-9Zry0C1OcBMIZgHmjuRlKf_sR3i9jG_YIsaWKEEtYDIHo`, options)
  const body = await response.json()
  res.send(body)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`) 
})