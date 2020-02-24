const myArray = [2, 5, 8, 20, 18]

console.log(myArray)
// traditional for loop
let sum = 0
for (let index = 0; index < myArray.length; index++) {
  sum = sum + myArray[index]
}
console.log(sum)
// Accumulate sum using for of
sum = 0
for (const item of myArray) {
  sum = sum + item
}
// Divide each element by two
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  myArray[index] = myArray[index] / 2
}
console.log('after', myArray)

const newArray = []
console.log('before', myArray)
for (let index = 0; index < myArray.length; index++) {
  newArray.push(myArray[index] / 2)
}
console.log('after', myArray, 'original', myArray)

function addTwo (value) {
  return value + 2
}

const resultArray = myArray.map(addTwo)
console.log(resultArray)

const arrFun = (value) => value + 2
const resultArray2 = myArray.map(arrFun)
console.log(resultArray2)

const resultArray3 = myArray.map((value) => value + 2)
console.log(resultArray3)

function printItem (arrayInput) {
  const htmlArray = myArray.map((value) => `<p>${value}</p>`)
  console.log(htmlArray)
  return htmlArray
}

printItem(myArray)
function compareNumber (a, b) {
  return a - b
}
printItem(myArray.sort(compareNumber))

// Arrow method version
printItem(myArray.sort((a, b) => a - b))

const todoList = [
  {
    content: 'Task 1', priority: 2, completed: true
  },
  {
    content: 'Task 2', priority: 1, completed: true
  },
  {
    content: 'Task 3', priority: 3, completed: true
  }
]

console.log(todoList)

function printToDo (arrayInput) {
  const htmlArray = arrayInput.map((value) =>
  `<p${
    (value.completed) ? 'class=done"' : ''}>
    ${value.priority}: ${value.content}
    </p>`)
  return htmlArray
}
console.log(printToDo(todoList).join('\n'))

const filteredArray = []
for (const item of todoList) {
  if (!item.completed) {
    filteredArray.push(item)
  }
}
console.log(printToDo(filteredArray).join('\n'))

function evalItem (item) {
  return item.completed
}

console.log(printToDo(todoList.filter(evalItem)).join('\n'))
console.log(printToDo(todoList.filter((item) => item.completed)))
