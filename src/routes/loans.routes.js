
const {Router} = require('express')
const LoansController = require("../controllers/LoansController")

const loansRoutes = Router()

const loansController = new LoansController()

loansRoutes.post("/:book_id/:user_id", loansController.criarEmprestimo)

loansRoutes.get("/:user_id", loansController.listEmprestimo)

loansRoutes.get("/total/:user_id", loansController.totalEmprestimos)

loansRoutes.patch("/devolucao/:user_id/:book_id", loansController.returnEmprestimos)


module.exports = loansRoutes;