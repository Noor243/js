// Arrays

// what is array? and why we use array?
// arrays is collection of some items 
	



	let marks = [31,87,98]
	// marks[3] = 90
	console.log(marks[0])
	console.log(marks[1])
	console.log(marks[2])
	console.log(marks[3])

		// last value is undefined bcz index 3 does not exist
	// console.log(marks[3])

	// find array length
	console.log("marks",marks.length)


	// marks[3] = 90
	  //  adding a new value to array


		// arrays are mutable arrays can be changed 
		// strings are mutable but can not be changed

		// array is not primitive type 
		// array is object 
		

	// Array methods

	// 1st to string method

	// convert any array to string
	let num = [1,2,3,4,5]
	let a = num.toString()  
	// a is now a string
	console.log(a)


	// 2nd method
	// join method 
let number = [1,2,3,4]
let c = number.join("and")
console.log(c)


// 3rd pop method
// remove last Element
let numb = [1,66,89]
let d = numb.pop()
console.log(num,d)

// 4th push method 
// add new 

let n = [1,2,3,88]
let e = n.push(10)
console.log(n,e)

// 5th shift method
// remove 1st 

let car = [1,2,3,88]
let f = car.shift(10)
console.log(car,f)

// 6th unshift method 
// add 1st item

let t = [1,5,6,7,8]
let g = t.unshift(4)
console.log(t,g)

// 7th  delete is not a method it is a operator

let numbers = [1,2,3,4,5,6,7]
console.log(numbers.length)
delete numbers[1,7]

// concat method

// make new array and combine arrays


  //  sort method 
// this method modify original array

// let array=[23,67,89,54,67]
// let sort = array.sort()
// console.log(sort)


// sort in a ascending order

let compare = (a,b)=>{
	return a-b
}

let array = [24,56,7,78,76,5,4,3,33]
array.sort(compare)
console.log(array)


// sort in a descending order

// let compare = (a,b)=>{
// 	return b-a
// }

// let array = [24,56,7,78,76,5,4,3,33]
// array.sort(compare)
// console.log(array)

// splice and slice method

let nums = [85,776,44444,332,24,5]
// sp.splice(1,3,2345,567,8,6666)
// console.log(sp)
      //  start 1 then del 3 elements and add new


			// slice method 
			// slice out piece from an array and it creates a new array


			let newNums = nums.slice(3)
			console.log(newNums)














