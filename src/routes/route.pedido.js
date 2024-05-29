import { Router } from "express";

import { db, query } from "../config/database.js";

const routePedido = Router()

routePedido.get('/pedidos', (req, res) => {
  db.all(`select id_pedido, total, nome, email, strftime('%d/%m/%Y', dt_pedido) as dt_pedido from pedido`, [], (err, rows) => {
    if (err) {
      return res.status(500).send('Ocorreu um erro: ' + err.message)
    } else {
      return res.status(200).json(rows)
    }
  })
})

routePedido.post('/pedidos', (req, res) => {

  // variavel com a consulta que sera feita no bd
  let sql = `insert into pedido(id_usuario, nome, email, fone, endereco,
    bairro, cidade, uf, cep, total, dt_pedido) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, current_date)
    returning id_pedido`;

  // estraindo do corpo na minha requisição o json e jogando para minha 'let p'
  let p = req.body;

    db.all(sql, [p.id_usuario, p.nome, p.email, p.fone, p.endereco,
      p.bairro, p.cidade, p.uf, p.cep, p.total], async (err, rows) => {
      if (err) {
        return res.status(500).send("Erro ao salvar pedido: " + err.message)
      } else {

        // armazanar o numero de pedidos que ele fez
        let id_ped = rows[0].id_pedido

        //* pegar o itens do pedido
        for (var prod of req.body.itens){
          sql = `insert into pedido_item(id_pedido, id_produto, qtd, vl_unitario, vl_total)
                values(?, ?, ?, ?, ?)`;

          await query(sql, [id_ped, prod.id_produto, prod.qtd, prod.vl_unitario, prod.vl_total]);
      }

        return res.status(201).json({id_pedido: id_ped});
      }
  });
});

export default routePedido
