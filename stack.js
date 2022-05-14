/* 
A stack is a LIFO (last in; first out) data structure. 
Arrays vs Stacks: https://www.geeksforgeeks.org/difference-between-stack-and-array/

From the link above: arrays has richer methods, more ways to traverse, insert and delete nodes and has about the same big o since they are dynamic.
You should use a stack if you don't need all the stuff arrays brings so your code can be cleaner and understood by others.

Examples: Keeping track of books that are stacked; Keeping a track history like how it is on webpages (back and front arrows on the left side of url)

Stack
- Access O(N)
- Search O(N) Usually not in stacks methods since it's LIFO
- Insertion (push) O(1)
- Deletion (pop) O(1)

Array (when using like a stack)
- Access O(1)
- Search O(N)
- Insertion O(1) (amortized) when inserting at the end whilst using a dynamic array (js uses dynamic arrays btw). O(N) anywhere else
- Deletion O(1)
*/

const stack = [] // u can make an array act like a stack but will have some caveats. Show interviewer the options and ask what they would prefer.

class Stack2 {
	// preferred
	constructor() {
		this.count = 0 // keeps track of length
		this.storage = {} // where we will store the nodes. using object to remove the methods that arrays come with
	}

	push(value) {
		this.storage[this.count] = value // gets the arg passed and sets it to current count
		this.count++ // since node was added, count will increase by one
	}

	pop() {
		this.count === 0 && undefined // to make sure there is nodes in stack
		this.count--
		const elDeleted = this.storage[this.count]
		delete this.storage[this.count] // actually deletes node
		return elDeleted // show which element was deleted
	}

	peek() {
		return this.storage[this.count - 1] // length starts at 1. index starts at 0. to check the last node, you need to subtract 1
	}

	length() {
		return this.count
	}
}

const stack2 = new Stack2()

function Stack1() {
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

const stack1 = new Stack1()

// classes are functions but just have cleaner and better syntax. It is preferable to use classes instead of functions when creating class-like functions
