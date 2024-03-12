const {Router} = require("express")
const BookController = require("../controllers/BookController")
const userRoutes = require("./users.routes")
const checkBooksExists = require("../middlewares/checkBooksExists")
const checkUsersExists = require("../middlewares/checkUsersExists")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/:user_id", checkUsersExists, bookController.createBook )

bookRoutes.get("/:user_id", bookController.listBook)

bookRoutes.get("/:id", checkBooksExists, bookController.listBookById)

bookRoutes.put("/:id", checkBooksExists, bookController.updateBook)

bookRoutes.patch("/status/:id", checkBooksExists, bookController.updateBookStatus)

bookRoutes.delete("/:id", checkBooksExists, bookController.deleteBook)

module.exports = bookRoutes