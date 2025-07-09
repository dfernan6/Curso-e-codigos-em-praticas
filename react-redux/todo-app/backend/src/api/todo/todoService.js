const Todos = require('./todos')

Todos.methods(['get', 'post', 'put', 'delete'])
Todos.updateOptions({new: true, runValidators:true})

module.exports = Todos