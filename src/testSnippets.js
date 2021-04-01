// create table ?

// develop methods for doubling it self

// add fraction of itself

let field = Array.from({ length: 9 }, (_, i) => i + 1);

//field = [].concat( ... new Array(1).fill(field.splice(0, Math.ceil(field.length / 2))));
field = field.concat(field.splice(0, Math.ceil(field.length / 2)), field);

// console.log(field);

Array.from({ length: 9 }, (_, i) => i + 1);

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];


console.table(activities);
console.log(activities[0][1]);

var arrays = [
    ["$6"],
    ["$12"],
    ["$25"],
    ["$25"],
    ["$18"],
    ["$22"],
    ["$10"]
];
var merged = [].concat.apply([], arrays);

console.log(merged);

const uint8 = new Uint8Array([0, 0, 0, 0]);
// (value, start position, end position);
uint8.fill(4, 1, 3);

console.log(uint8);
// expected output: Uint8Array [0, 4, 4, 0]

const float32 = new Float32Array([0, 0, 0, 0]);
// (value, start position, end position);
float32.fill(4, 1, 3);

console.log(float32);
// expected output: Uint8Array [0, 4, 4, 0]

const baseField = Array.from({ length: 9 }, (_, i) => i + 1);

const fieldLength = 10000;

var foo = [
    [9, 2],
    [9, 2],
    [9, 2],
];

const maxBaseFieldsPerRow = Math.floor(fieldLength / baseField.length);

let outputField = [].concat(... new Array(maxBaseFieldsPerRow).fill(baseField));

let filledArray = new Array(10000).fill(outputField);

var merged = [].concat.apply([], filledArray);

console.log(merged);

/*
for (let i=0; i < 10000; i++) {
    foo.push(outputField);
}
*/

//console.table(foo);

  // [].concat.apply([], Array(300000).fill().map(_=>[1,2,3]));

/*
  def find_ans(ar, j, k):
    l = len(ar)
    for i in range(1, l):
        ar[i] = ar[i] + ar[i-1]
 
    print(ar[k] - ar[j-1])
    return
 
# Driver code
pr = [1, 2, 3, 4, 5]
ar = pr[:]
find_ans(ar, 1, 3)
ar = pr[:]
find_ans(ar, 2, 4)
*/

