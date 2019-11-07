var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

// test('Testing if input argument is unchanged', function(t) {
//   var actual = (logic.deleteTodo([{id: 3},{id: 5}], 3));
//   var expected = ([{id: 3},{id: 5}]);
//   t.equal(actual, expected, 'Should return todos when given todos');
//   t.end();
// });

// test('Testing if input argument is unchanged', function(t) {
//   var actual = (logic.deleteTodo(["a", "b"]).join());
//   var expected = (["a", "b"]).join();
//   t.equal(actual, expected, 'Should return todos when given todos');
//   t.end();
// });

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
  var actual = logic.deleteTodo(toDoInput, 3);
  var x = toDoInput.map(function(e) {return e.id}).indexOf(3);
  var bool = toDoInput[x].done;
  console.log(x);
  console.log(bool);
  var expected = marktoDoOutput;
  t.deepEqual(actual, expected, 'test done property has been changed');
  t.end();
}); 

