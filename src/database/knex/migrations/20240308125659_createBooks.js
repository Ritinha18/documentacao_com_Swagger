
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
    table.increments("id").primary(),
        table.string("titulo").notNullable();
        table.string("autor").notNullable();
        table.string("categoria").notNullable();
        table.timestamp('ano').notNullable();
    
        table.integer("user_id").unsigned().index().references("id").inTable("users")

    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("books")
  
};
