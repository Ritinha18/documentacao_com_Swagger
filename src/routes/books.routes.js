const {Router} = require("express")
const BookController = require("../controllers/BookController")
const userRoutes = require("./users.routes")

const bookRoutes = Router()
const bookController = new BookController()

bookRoutes.post("/books/:user_id", bookController.createBook )

bookRoutes.get("/books", bookController.listBook)

bookRoutes.get("/books/:id", bookController.listBookById)

bookRoutes.put("/books/:id", bookController.updateBook)

bookRoutes.patch("/books/status/:id", bookController.updateBookStatus)

bookRoutes.delete("/books/:id", bookController.deleteBook)

module.exports = bookRoutes