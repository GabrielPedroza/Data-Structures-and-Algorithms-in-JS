/**
 * A stack is a LIFO (last in; first out) data structure.
 * Examples: Keeping track of books that are stacked; Keeping a track history like how it is on webpages (back and front arrows on the left side of url);
 *
 * Array Stack
 *
 * @Access  O(1) Memory storage is contiguous for arrays.
 * @Search  O(N)
 * @Insertion  O(1) amortized. Worst case is linear but not considered in the context of coding interviews. (IMO, tell them though to make sure they know you know)
 * @Deletion  O(1) only in the end. Anywhere else is O(N)
 *
 * Singly Linked List
 *
 * @Access O(N) unless head
 * @Search O(N)
 * @Insertion O(1)
 * @Deletion O(1)
 */

const stack1 = [] // Best option. Dynamic array. Already has built-in "stack" methods (push, pop, length, etc...). If it was not dynamic, then you will use a singly linked list

class Stack {
	constructor() {
		this.storage = {}
		this.count = 0
	}

	push(element) {
		this.storage[this.count] = element
		this.count++
		return
	}

	pop() {
		if (this.count === 0) return null

		delete this.storage[this.count - 1]
		this.count--

		return
	}

	peek() {
		return this.storage[this.count - 1]
	}

	get size() {
		return this.count
	}
}

/* classes are functions but just have cleaner and better syntax. 
It is preferable to use classes instead of functions when creating class-like functions (for up-to-date code and syntactic sugar) */

/*
Sets are like arrays but elements do not repeat in sets

const set = new Set([1,2,3]); // {1,2,3}
const arr = Array.from(set); //[1,2,3] (second param of array is a map function)
const set2 = [...set] // [1,2,3] (makes object into an array using spread operator)

Remember: objects and arrays are stored differently in memory address so they can repeat but will be different since they aren't referenced to each other

Also, if you care about the order, you can rely on sets, not arrays 
*/

/**
 * @returns {1, 2, 3, 4, 5, 6}  Will not repeat by value, no exceptions
 **/

const set = new Set([1, 2, 3, 4, 4, 5, 6, 6])

/* 
Built in methods (all voided except size) of sets:

- add // returns entire set
- has // boolean
- delete // boolean
- clear
- size (it is a property (don't add parenthesis) )

also has built-in iterables like Object.keys .values and .entries
// keys and values do the same thing so it can be compatible with new map. entries returns iterable object [value, value] tl;dr use keys()

You can also convert it to an array using: Array.from(mySet, mapFn(optional btw)) or [...set] so you can add higher order functions (filter, reduce, map, etc...)

*/

const mySet1 = new Set([1, 2, 3, 4, 5, 6])
const mySet2 = new Set([1, 2, 4, 6, 7, 8, 9])

// intersect can be simulated via
const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))
// console.log(intersection) // {1, 2, 4, 6}

// difference can be simulated via
const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))
// console.log(difference) // {3, 5}

class mySet {
	constructor() {
		this.count = 0
		this.storage = []
	}

	has(element) {
		if (this.count === 0) return false
		return this.storage.indexOf(element) !== -1
	}

	add(element) {
		if (this.has(element)) return null

		this.storage.push(element)
		this.count++
		return this
	}

	delete(element) {
		if (this.count === 0) return null

		if (this.has(element)) {
			this.storage.splice(this.count - 1, 1)

			this.count--
			return
		}
		return null
	}

	clear() {
		this.storage = []
		this.count = 0
	}

	get size() {
		return this.count
	}

	print() {
		console.log(this.storage)
	}
}
