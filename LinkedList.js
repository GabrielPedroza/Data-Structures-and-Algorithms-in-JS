/*
Access Head: O(1)
Access Tail: O(N) (for singly; doubly is O(1))
Access Middle Node: O(N)
Delete Head: O(1)
Delete Tail: O(N) to search + O(1) to remove = O(N) (for singly; doubly is O(1)) 
Delete Middle Node: O(N) to search + O(1) to remove = O(N)
Searching for a Node/value: O(N)
*/

class Node {
	constructor(element) {
		this.element = element
		this.next = null
	}
}

// this.head -> 0 -> 1 -> 2 -> 3 -> 4 -> null
class LinkedList {
	constructor() {
		this.length = 0
		this.head = null
	}

	get _length() {
		return this.length
	}

	get _head() {
		return this.head
	}

	insert(element) {
		const node = new Node(element)
		// if list is empty, make the node the head
		if (this.head == null) {
			// implicit type coercion so it will check for null and undefined
			this.head = node
		} else {
			let currentNode = this.head // no ram in linked list. u iterate from the head. this is the starting point

			// iterate to the end of list
			while (currentNode.next) {
				currentNode = currentNode.next
			}

			currentNode.next = node // gets last pointer that is null and points it to the node that we just added
		}
		this.length++
	}

	insertAt(element, index) {
		if (index < 0 || index >= this.length) return null // if index is less than 0 or greater than the length of the list length (invalid index)

		const node = new Node(element)
		let previousNode, currentNode

		if (index === 0) {
			node.next = this.head // the second node will be pointed by the first node (small edge case but still solved: creates an extra uneccessary operation if list is empty)
			this.head = node // this.head will point to the first node in the list
		} else {
			currentNode = this.head // no ram in linked list. u iterate from the head. this is the starting point
			let currentIndex = 0

			while (currentIndex < index) {
				// we will recieve the node at the index
				currentIndex++
				previousNode = currentNode
				currentNode = currentNode.next
			}

			// adding an element
			previousNode.next = node
			node.next = currentNode // currentNode's index is the one we want to be in
		}
		this.length++
	}

	deleteFrom(index) {
		if (index < 0 || index >= this.length) return null // invalid index

		let currentNode, previousNode
		currentNode = this.head

		if (index === 0) {
			// remove current head node
			this.head = currentNode.next
		} else if (index === 1 && this.length === 1) {
			return
		} else {
			let currentIndex = 0

			while (currentIndex < index) {
				currentIndex++
				previousNode = currentNode
				currentNode = currentNode.next
			}
			previousNode.next = currentNode.next
		}
		this.length--
		return currentNode.element // deleted node
	}

	deleteElement(element) {
		let previousNode, currentNode

		currentNode = this.head

		// to check the first element in the list
		if (currentNode.element === element) {
			const deletedNode = currentNode
			this.head = currentNode.next
			return deletedNode
		} else {
			while (currentNode) {
				if (currentNode.element === element) {
					const deletedNode = currentNode
					previousNode.next = currentNode.next
					return deletedNode
				}

				previousNode = currentNode
				currentNode = currentNode.next
			}
		}
		this.length--
		return null
	}

	indexOf(element) {
		let currentNode = this.head

		let currentIndex = 0

		while (currentNode) {
			if (currentNode.element === element) {
				return currentIndex
			}
			currentIndex++
			currentNode = currentNode.next
		}

		return null
	}

	isEmpty() {
		return this.length === 0
	}

	toArray() {
		const NodeArray = []

		if (!this._length) return NodeArray

		let currentNode = this.head

		while (currentNode) {
			NodeArray.push(currentNode.element)
			currentNode = currentNode.next
		}

		return NodeArray
	}

	printList() {
		if (!this._length) return null

		let currentNode = this.head

		while (currentNode) {
			console.log(currentNode.element)
			currentNode = currentNode.next
		}

		return null
	}
}

const conga = new LinkedList()
conga.insert(1)
conga.insert(2)
conga.insert(3)
conga.insert(4)
console.log(conga.deleteElement(2))
console.log(conga._length) // 3
console.log(conga.deleteElement(5)) // null
console.log(conga.printList()) // this.head -> 1 ->  3 -> 4 -> null
console.log(conga.indexOf(1)) // 0
console.log(conga.toArray()) // [1, 3, 4]
console.log(conga.printList()) // this.head -> 1 ->  3 -> 4 -> null
console.log(conga._length) // 3
console.log(conga.deleteFrom(1)) // 3
console.log(conga._length)
console.log(conga.deleteFrom(1)) // 4
console.log(conga._length)
console.log(conga.deleteFrom(1)) // 1
console.log(conga._length)
conga.deleteFrom(2) // [1, 3]
console.log(conga.printList()) // this.head -> 1 ->  3 -> 4 -> null

// Linked List queue
// queue needs to be accessed from the head and the tail so we need to implement a doubly linked list so enqueue/dequeue from head and tail will be constant time.
class DNode {
	constructor(element) {
		this.prev = null
		this.element = element
		this.next = null
	}
}

// null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 -> null
class DoublyLinkedList {
	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
	}

	get _length() {
		return this.length
	}

	get _head() {
		return this.head
	}

	get _tail() {
		return this.tail
	}

	insertAtBeginning(element) {
		const node = new DNode(element)

		if (this.length === 0) {
			this.head = node
			this.tail = node
			this.length++
			return
		}

		node.next = this.head
		this.head = node

		this.length++
	}

	deleteAtBeginning() {}

	insertAtEnd(element) {}

	deleteAtEnd() {}

	insertAt(element, index) {}

	deleteAt(index) {}
}
// can be singly or doubly
// no clear head or tail; tail points to head which forms a closed circle
// this.tail(4 in this list) <- 0 <-> 1 <-> 2 <-> 3 <-> 4 -> this.head(0 in this list) (no null value if not empty) (doubly)
class SinglyCircularNode {
	constructor(element) {
		this.element = element
		this.next = null
	}
}
class CircularLinkedList {
	constructor() {
		this.length = 0
		this.head = null
	}

	//Other methods go here
	//Get element at specific index
	getElementAt(index) {
		if (index >= 0 || index <= this.length) {
			let node = this.head
			for (let i = 0; i < index && node != null; i++) {
				node = node.next
			}
			return node
		}
		return undefined
	}

	//Add new node
	append(element) {
		//Create new node
		const node = new Node(element)
		let current

		//If head is empty
		//Then make new node head
		if (this.head === null) {
			this.head = node
		} else {
			//Else add the new node as the next node
			//And mark the next of new node to the head
			current = this.getElementAt(length - 1)
			current.next = node
		}

		node.next = this.head
		this.length++
	}

	//Insert at given position
	insert(element, index) {
		if (index >= 0 && index <= this.length) {
			const node = new Node(element)
			let current = this.head

			//Insert at head
			if (index === 0) {
				if (this.head === null) {
					this.head = node
					node.next = this.head
				} else {
					node.next = current
					current = this.getElementAt(this.length)
					this.head = node
					current.next = this.head
				}
			} else {
				//Insert at given index (middle or end)
				const previous = this.getElementAt(index - 1)
				node.next = previous.next
				previous.next = node
			}

			this.length++
			return true
		}
		return false
	}

	//Remove at any position
	removeAt(index) {
		if (index >= 0 && index < this.length) {
			let current = this.head

			//Remove from head
			if (index === 0) {
				if (this.length === 1) {
					this.head = undefined
				} else {
					const removed = this.head
					current = this.getElementAt(this.length - 1)
					this.head = this.head.next
					current.next = this.head
					current = removed
				}
			} else {
				//Remove at given index (middle or end)
				const previous = this.getElementAt(index - 1)
				current = previous.next
				previous.next = current.next
			}

			this.length--
			return current.element
		}
		return undefined
	}

	//Get the indexOf item
	indexOf(elm) {
		let current = this.head,
			index = -1

		//If element found then return its position
		while (current) {
			if (elm === current.element) {
				return ++index
			}

			index++
			current = current.next
		}

		//Else return -1
		return -1
	}

	//Find the item in the list
	isPresent(elm) {
		return this.indexOf(elm) !== -1
	}

	//Get the head
	getHead() {
		return this.head
	}

	//Delete an item from the list
	delete(elm) {
		return this.removeAt(this.indexOf(elm))
	}

	//Delete the first item from the list
	deleteHead() {
		this.removeAt(0)
	}

	//Print item of the string
	toString() {
		let current = this.head
		let string = ""
		const temp = this.head.element

		while (current) {
			if (temp === current.next.element) {
				string += current.element + (current.next ? "\n" : "")
				break
			}

			string += current.element + (current.next ? "\n" : "")
			current = current.next
		}

		return string
	}

	//Convert list to array
	toArray() {
		let arr = [],
			current = this.head
		const temp = this.head.element

		while (current) {
			//Break if first element detected
			if (temp === current.next.element) {
				arr.push(current.element)
				break
			}

			arr.push(current.element)
			current = current.next
		}

		return arr
	}

	//Check if list is empty
	isEmpty() {
		return this.length === 0
	}

	//Get the size of the list
	size() {
		return this.length
	}
}

class Queue {
	constructor() {
		this.storage = new DoublyLinkedList()
	}

	get _size() {
		this.storage._length
	}

	enqueue(element) {
		this.storage.insertAtBeginning(element)
	}

	dequeue() {
		this.storage.deleteAtEnd()
	}

	toArray() {
		this.storage.toArray()
	}

	printCollection() {
		this.storage.printCollection()
	}
}
