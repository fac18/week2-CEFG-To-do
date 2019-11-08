var test = require('tape');
var logic = require('./logic');

var todos = [];

test('Example test', function(t) {
  t.pass();
  t.end();
});

 test('Testing if input argument is unchanged', function(t) {
   var actual = (logic.deleteTodo([{id: 3},{id: 5}], 3));
   var expected = ([{id: 3},{id: 5}]);
   t.equal(actual, expected, 'Should return todos when given todos');
   t.end();
 });

 test('Testing if input argument is unchanged', function(t) {
   var actual = (logic.deleteTodo(["a", "b"]).join());
   var expected = (["a", "b"]).join();
   t.equal(actual, expected, 'Should return todos when given todos');
   t.end();
 });

test('Testing new array does not contain idTODelete', function(t) {
  var actual = ((logic.deleteTodo([{id: 3},{id: 5}], 3))).join();
  var expected = ([{id: 5}]).join();
  t.equal(actual, expected, 'testing new array does notcontain idtodelete');
  t.end();
});

var toDoInput = [
  {
    id: 5,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 3,
    description: 'make coffee',
    done: false,
  },
];
var toDoOutput = [
  {
    id: 5,
    description: 'smash avocados',
    done: true,
  }
];
test('Testing input argument todos is unchanged', function(t) {
  var actual = toDoInput;
  var callFunction = logic.deleteTodo(toDoInput, 3);
  var expected = toDoInput;
  t.deepEqual(actual, expected, 'testing input argument todos are unchanged');
  t.end();
});

test('Testing new array does not contain idTODelete', function(t) {
  var actual = logic.deleteTodo(toDoInput, 3);
  var expected = toDoOutput;
  t.deepEqual(actual, expected, 'testing new array does notcontain idtodelete');
  t.end();
});

test('Testing input argument todos is unchanged', function(t) {
  var actual = toDoInput;
  var callFunction = logic.markTodo(toDoInput, 3);
  var expected = toDoInput;
  t.deepEqual(actual, expected, 'testing input argument todos are unchanged');
  t.end();
});

var markToDoOutput = [
  {
    id: 5,
    description: 'smash avocados',
    done: false,
  },
  {
    id: 3,
    description: 'make coffee',
    done: false,
  },
]; 

 test('test done property has been changed', function(t) {
   var x = toDoInput.map(function(e) {return e.id}).indexOf(5);
   var actual = toDoInput[x].done;
   var expected = markToDoOutput[x].done;
   t.notEqual(actual, expected, 'test done property has been changed');
   t.end();
 }); 

test('test done property has been changed', function(t) {
  var actual = toDoInput[0].done;
  var expected = markToDoOutput[0].done;
  t.notEqual(actual, expected, 'test done property has been changed');
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

 test('Should add an id to newObject', function(t) {
   var actual = logic.addTodo();
   var expected = 
   t.equal(actual, expected, 'Should add an id to the newObject');
   t.end();
 })

