import { Sum, AddList } from './MyMath.js'

//AddList
describe("Addlist", () => {

  test('add a list of numbers together', () => {
    let numElm = 1000;
    let input = [];
    let result = 0;
    let elem = 0;
    for(var j = 0; j < 10; j++) {
      for(var i =0; i <numElm; i++) {
        elem = Math.random()*1000;
        result += elem;
        input.push(elem)
      }
      expect(AddList(input)).toBe(result);
    }
  })
  test('tests if a empty array returns undefined', () => {
    let input = [];
    expect(Sum(AddList(input))).toBeUndefined();
  })
})

  describe("Sum", () => {
  test('Wheather undefined is returned or invalid type', () => {
    expect(Sum(1, 2)).toBe(3)
  })
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})
it('produces the sum of 10 + 20, which should be 30', () => {
  expect(Sum(10, 20)).toBe(30)
})
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
