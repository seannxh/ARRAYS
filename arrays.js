
//Exercise 2: Add strings to the array

const foods = [] 
    foods[0] = ('pizza')
    foods.push('cheeseburger')
console.log(foods)
//[ 'pizza', 'cheeseburger' ]

//Exercise 3: Insert at the beginning

foods.splice(0, 0, 'taco')

console.log(foods)
//[ 'taco', 'pizza', 'cheeseburger' ]

//Exercise 4: Access an array beginning

foods.splice(0, 1)

favFood = ['pizza']

console.log(favFood)
//[ 'pizza' ]

//Exercise 5: Insert an element between two others

foods.splice(1, 0, 'tofu')
console.log(foods)
//[ 'pizza', 'tofu', 'cheeseburger' ]

//Exercise 6: Replace Elements
foods.splice(0, 1, 'sushi', 'cupcake')
console.log(foods)
//[ 'sushi', 'cupcake', 'tofu', 'cheeseburger' ]

//Exercise 7: Using the slice() method
const yummy = foods.slice(1, 3)
console.log(yummy)
//[ 'cupcake', 'tofu' ]

//Exericse 8: Finding an index
const soyIdx = foods.indexOf('tofu')
console.log(soyIdx)
//2

//Exercise 9: Joining Elements

const allFoods = foods.join('->')
console.log(allFoods)
//sushi->cupcake->tofu->cheeseburger

//Exercise 10: Check for an element

const hasSoup = foods.includes('soup')
console.log(hasSoup)
//false

//Exercise 11: Odd numbers from an array

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
nums.forEach(num => {
     if (num % 2 !== 0) {
          odds.push(num);
     }
 });
 console.log(odds)
 /*[
  5, 23, 15, 21,
  9, 45,  7, 81
]
*/

//Exercise 12: FizzBuzz with arrays
const nums1 = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const fizz = []
const buzz = []
const fizzbuzz = []

nums1.forEach(nums => {
    if(nums % 3 === 0){
        fizz.push(nums)
    }
    if(nums % 5 === 0){
        buzz.push(nums)
    }
    if(nums % 3 === 0 && nums % 5 === 0){
        fizzbuzz.push(nums)
    }
})
console.log('buzz', buzz)
//buzz [ 100, 5, 15, 45, 90 ]

//Exercise 13: Retrieve the last array

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[3]
console.log(numList)
//[ 7, 81, 90 ]

//Exercise 14: Accesing within nested arrays
num22 = numArrays[2][1]
console.log(num22)
//66

//Exercise 15: Nested array sum
total = 0;
numArrays.forEach(array => {
    array.forEach(num => {
        total += num;
    })
})
console.log(total)
//534