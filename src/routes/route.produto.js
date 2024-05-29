import { Router } from "express"

import { db } from "../config/database.js"

const routeProduto = Router();

routeProduto.get('/produtos', (req, res) => {
  db.all('select * from produto', [], (err, rows) => {
    if (err) {
      return res.status(500).send('Ocorreu um erro: ' + err.message)
    } else {
      return res.status(200).json(rows)
    }
  })
})

export default routeProduto
