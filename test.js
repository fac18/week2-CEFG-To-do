var test = require('tape');
var logic = require('./logic');

var todos = [];
// var newTodo = 'make tea';

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('Returns new array', function(t) {
  var actual = typeof logic.addTodo([]);
  var expected = typeof [];
  t.equal(actual, expected, 'addTodo should return a new array');
  t.end();
})


test('Should leave input argument unchanged', function(t) {
var actual = logic.addTodo([1,2,3]);
var expected = [1,2,3];
t.deepEqual(actual, expected, 'Should leave the input argument todos unchanged');
t.end();
})

test('Should add an id to newObject', function(t) {
  var actual = logic.addTodo(todos, 'make coffee');
  var expected = [{
    id: 1,
    description: 'make coffee',
    done: false
  }]
  t.deepEqual(actual, expected, 'Should add an id to newObject');
  t.end();
})

// test('Should add an id to newObject', function(t) {
//   var actual = logic.addTodo();
//   var expected = 
//   t.equal(actual, expected, 'Should add an id to the newObject');
//   t.end();
// })

/*{
  id: 1,
  descptrion: 'make tea',
  done: false,
};


var actual = logic.addTodo(todos, newTodo).length;
  var expected = todos.length + 1;*/
