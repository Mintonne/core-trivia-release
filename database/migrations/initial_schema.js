exports.up = (knex) => {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('answers')
    .dropTableIfExists('questions')
    .dropTableIfExists('images')
    .dropTableIfExists('category_languages')
    .dropTableIfExists('categories')
    .dropTableIfExists('languages')
    .createTable('users', table => {
      table.uuid('userid').primary()
      table.string('username', 100).notNullable().unique()
      table.string('email').notNullable().unique()
      table.specificType('password', 'char(60)').notNullable()
      table.string('role', 50).notNullable().defaultTo('user')
      table.boolean('active').notNullable().defaultTo(false)
      table.boolean('banned').notNullable().defaultTo(false)
      table.timestamp('regDate').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('languages', table => {
      table.integer('id').primary().unsigned()
      table.string('name').notNullable()
      table.boolean('active').notNullable().defaultTo(true)
    })
    .createTable('categories', table => {
      table.integer('id').primary().unsigned()
      table.string('name').notNullable()
      table.boolean('active').notNullable().defaultTo(true)
      table.boolean('enable_timer').notNullable().defaultTo(false)
      table.integer('timer_amount').notNullable().unsigned()
      table.boolean('enable_lives').notNullable().defaultTo(false)
      table.integer('lives_amount').notNullable().unsigned()
      table.boolean('limit_questions').notNullable().defaultTo(false)
      table.integer('question_limit').notNullable().unsigned()
      table.timestamp('modified').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('category_languages', table => {
      table.bigIncrements('id').unsigned()
      table.integer('language_id').notNullable().unsigned().references('languages.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('category_id').notNullable().unsigned().references('categories.id').onDelete('CASCADE').onUpdate('CASCADE')
    })
    .alterTable('category_languages', table => {
      table.unique(['language_id', 'category_id'])
    })
    .createTable('images', table => {
      table.bigInteger('id').primary().unsigned()
      table.string('name').notNullable()
      table.string('filename').notNullable()
      table.timestamp('modified').notNullable().defaultTo(knex.fn.now())
    })
    .createTable('questions', table => {
      table.bigInteger('id').primary().unsigned()
      table.integer('category_id').unsigned().notNullable().references('categories.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('active').notNullable().defaultTo(true)
      table.text('question').notNullable()
      table.text('explanation')
      table.bigInteger('image_id').unsigned().references('images.id').onDelete('SET NULL').onUpdate('CASCADE')
      table.enum('type', ['multi', 'tof']).notNullable()
      table.boolean('tof_answer').notNullable().defaultTo(true)
    })
    .createTable('answers', table => {
      table.bigIncrements('id').unsigned()
      table.bigInteger('question_id').notNullable().unsigned().references('questions.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.boolean('correct').notNullable()
      table.string('answer').notNullable()
    })
}

exports.down = (knex) => {

}
