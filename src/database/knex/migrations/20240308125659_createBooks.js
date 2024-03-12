
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
    table.increments("id").primary(),
        table.string("titulo").notNullable();
        table.string("autor").notNullable();
        table.string("categoria").notNullable();
        table.string('ano').notNullable();
        table.integer('paginas').notNullable();
        table.boolean("disponibilidade").defaultTo('true');

        table.timestamp('created_at').default(knex.fn.now());
        table.timestamp('updated_at').default(knex.fn.now());
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("books")
  
};
