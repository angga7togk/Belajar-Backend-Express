const express = require('express')
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: "Hello Worlds"
  })
})

app.listen(port, () => {
  console.log(`Backend app listening on http://localhost:${port}`)
})