
exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
        table.increments('id').primary()
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("telefone").notNullable();
        table.string("CPF").notNullable();
        table.string("password").notNullable();

        table.integer("book_id").unsigned().index().references("id").inTable("book")

    }) 
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users")
};
