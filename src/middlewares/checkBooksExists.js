const knex = require("../database");


async function checkBooksExists(req, res, next) {
    const {id} = req.params
    const [book] = await knex(`SELECT * FROM books WHERE id = ${id}`)

   if(book.length === 0) {
        return res.status(400).json("Livro não encontrado!")
   }
   next()
}

module.exports = checkBooksExists
