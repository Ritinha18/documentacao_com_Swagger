const knex = require("../database/knex")

class LoansController {
    async criarEmprestimo(req, res) {
        const {user_id, book_id} = req.params

        const book = await knex("books").where({id: book_id}).first()
        const user = await knex("users").where({id: user_id}).first()

        if(!book) {
            return res.status(400).json("Livro não encontrado!")
        }

        if(!user) {
            return res.status(400).json("Usuário não encontrado!")
        }

    await knex("loans").insert({user_id, book_id})
    await knex("books").where({id: book_id}).update({disponibilidade: false})
    
    return res.status(200).json("Empréstimo realizado com sucesso!")
}

    async listEmprestimo(req, res) {
        const {user_id} = req.params

        const loans = await knex("loans").where({user_id}).innerJoin('books', 'books.id', 'loans.book_id').select('books.titulo', 'books.autor')

        return res.status(200).json(loans)

    }

    async totalEmprestimos(req, res) {
        const {user_id} = req.params

        const [total] = await knex('loans').where({user_id}).count({books: 'book_id'})

        return res.status(200).json(total)
    }

    async returnEmprestimos(req, res) {
            const {user_id, book_id} = req.params
    
            const book = await knex("books").where({id: book_id}).first()
            const user = await knex("users").where({id: user_id}).first()
    
            if(!book) {
                return res.status(400).json("Livro não encontrado!")
            }
    
            if(!user) {
                return res.status(400).json("Usuário não encontrado!")
            }
    
        const [loan] = await knex("loans").where({user_id})

        const bookId = loan.book_id

        if(bookId == book_id) {
            await knex("books").where({id:book_id}).update({disponibilidade: true})

            return res.status(200).json("Livro devolvido com sucesso!")
        }

        return res.status(400).json("Operação não realizada!")

    }
}


module.exports = LoansController