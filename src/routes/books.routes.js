const {Router} = require("express")
const BookController = require("../controllers/BookController")
const userRoutes = require("./users.routes")
const checkBooksExists = require("../middlewares/checkBooksExists")
const checkUsersExists = require("../middlewares/checkUsersExists")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books/:user_id", checkUsersExists, bookController.createBook )

bookRoutes.get("/books", bookController.listBook)

bookRoutes.get("/books/:id", checkBooksExists, bookController.listBookById)

bookRoutes.put("/books/:id", checkBooksExists, bookController.updateBook)

bookRoutes.patch("/books/status/:id", checkBooksExists, bookController.updateBookStatus)

bookRoutes.delete("/books/:id", checkBooksExists, bookController.deleteBook)

module.exports = bookRoutes