import sqlite3 from 'sqlite3'

const SQLite3 = sqlite3.verbose()

function query(command, params, method = 'all') {
  return new Promise((req, res) => {
    // fica executando essa função e aguardando, na hora que terminar ele retorna o resultado ou o erro
    db[method](command, params, (error, result) => {
      if(error) {
        res(error)
      } else {
        req(result)
      }
    })
  })
}

// instaciar o banco de dados
const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, (err) => {
  if(err) return console.log('Erro ao conectar com o banco: ' + err.message)
})

// qualquer parte do meu codigo é so eu importar o bd que vou poder utilizar e o queri que faz a rotina de executar comandos
export { db, query }
