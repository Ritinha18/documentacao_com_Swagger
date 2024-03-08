const knex = require("../database/knex");
class UserController {

    async createUser(req, res) {
        const {name, email, telefone, password, CPF} = req.body


        await knex("users").insert({name, email, telefone, password, CPF})

        return res.status(201).json("Usuário cadastrado com sucesso!")
    }

    async listUser(Req, res) {
        const users = await knex("users")
        return res.status(200).json(users)
    }

    async listUserById(req, res) {
        const {user_id} = req.params
        const user = await knex("users").where({id: user_id})

        return res.status(200).json(user)
    }

    async updateUser(req, res) {
        const {user_id} = req.params
        const {name, email} = req.body

        await knex("users").where({id: user_id}).update({name, email})
        return res.status(200).json("Usuário atualizado com sucesso!")
    }

    async updateUserAdmin(req, res) {
        const {user_id} = req.params

        await knex ("users").where({id: user_id}).update({idAdmin: true})
        return res.status(200).json("Usuário agora é um administrador!")
    }

    async deleteUser(req, res) {
        const {user_id} = req.params
        await knex("users").where({id: user_id}).delete()
        return res.status(200).json("Registro deletado com sucesso!")

    }
    }
    module.exports = UserController