/* 
A stack is a LIFO (last in; first out) data structure. 

Arrays has richer methods, more ways to traverse, insert and delete elements anywhere and has about the same big o as stacks since they are dynamic.
You should use a stack if you don't need all the rich methods arrays brings so your code can be cleaner and understood by others. Usually used with linked lists.

Examples: Keeping track of books that are stacked; Keeping a track history like how it is on webpages (back and front arrows on the left side of url); 

Stack
- Access O(N)
- Search O(N) Usually not in stacks methods since it's LIFO but can be traversed if needed (depends on how it is stored (object or array))
- Insertion (push) O(1)
- Deletion (pop) O(1)

Array (when using like a stack)
- Access O(1)
- Search O(N)
- Insertion O(1) (amortized) when inserting at the end whilst using a dynamic array (js uses dynamic arrays btw). O(N) static
- Deletion O(1)

Stack but using hash map as storage
- Access O(1)
- Search O(1) because of hash function in play
- Traverse keys, values or entries O(N)
- Insert & Delete - O(1) because of the hash functions but still is amortized if hash function is shitty (stored as a linked list)
*/

const stack1 = [] // u can make an array act like a stack but will have some caveats. (Bonus points: Explain to the interviewer the options and ask what they would prefer)

class Stack2 {
	// preferred
	constructor() {
		this.count = 0 // keeps track of length. optional but cleaner since index and length are offset by 1
		this.storage = {} // where we will store the nodes. using object to remove the methods that arrays come with
	}

	push(value) {
		this.storage[this.count] = value // gets the arg passed and sets it to current count
		this.count++ // since node was added, count will increase by one
	}

	pop() {
		this.count === 0 && undefined // guard clause to make sure there is nodes in stack
		this.count--
		const elDeleted = this.storage[this.count] // saves the value ONLY to show what was deleted. It is deleted regardless
		delete this.storage[this.count] // actually deletes node
		return elDeleted // show which element was deleted
	}

	peek() {
		return this.storage[this.count - 1] // length starts at 1. index starts at 0. to check the last node, you need to subtract 1
	}

	length() {
		return this.count // the count is the same as the length
	}
}

const stack2 = new Stack2()

function Stack3() {
	// not preferred
	this.count = 0
	this.storage = {}

	this.push = value => {
		this.storage[this.count] = value
		this.count++
	}

	this.pop = () => {
		this.count === 0 && undefined
		this.count--
		const elDeleted = this.storage[this.count]
		delete this.storage[this.count]
		return elDeleted
	}

	this.peek = () => {
		return this.storage[this.count - 1]
	}

	this.length = () => {
		return this.count
	}
}

const stack3 = new Stack3()

/* classes are functions but just have cleaner and better syntax. 
It is preferable to use classes instead of functions when creating class-like functions (for up-to-date code and syntactic sugar) */

/*
Sets are like arrays but elements do not repeat in sets

Sets are keyed collections; Arrays are indexed collections

const set = new Set([1,2,3]); // {1,2,3}
const arr = Array.from(set); //[1,2,3] (second param of array is a map function)
const set2 = [...set] // [1,2,3] (makes object into an array using spread operator)

Remember: objects and arrays are stored differently in memory address so they can repeat but will be different since they aren't referenced to each other

Also, if you care about the order, you can rely on sets, not arrays 
*/

const set = new Set([1, 2, 3, 4, 4, 5, 6, 6]) // {1, 2, 3, 4, 5, 6}  Will not repeat by value, no exceptions

/* 
Built in methods (all voided except size) of sets:

- add // returns entire set
- has // boolean
- delete // boolean
- clear
- size (it is a property (don't add parenthesis) )

also has built-in iterables like Object.keys .values and .entries
// keys and values do the same thing so it can be compatible with new map. entries returns iterable object [value, value] tl;dr use keys

You can also convert it to an array using: Array.from(mySet, mapFn(optional btw)) or [...set] you can add higher order functions (filter, reduce, forEach, etc...)

*/