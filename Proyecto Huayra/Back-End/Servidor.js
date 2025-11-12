const express = require('express');
const cors = require('cors')
const datosEscolares = require('./src/Routes/RutasDeDatos.js')
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', datosEscolares);
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});