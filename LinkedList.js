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
		if (index < 0 || index > this.length) return null // if index is less than 0 or greater than the length of the list length (out of bounds)

		const node = new Node(element)
		let previousNode, currentNode

		if (index === 0) {
			node.next = this.head // the second node will be pointed by the first node
			this.head = node // this.head will point to the first node in the list
		} else {
			currentNode = this.head // no ram in linked list. u iterate from the head. this is the starting point
			let currentIndex = 0

			while (currentIndex < index) {
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
		if (index < 0 || index > this.length) return null

		let currentNode, previousNode

		if (index === 0) {
			currentNode = this.head
			this.head = currentNode.next
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
	}

	deleteElement(element) {
		let previousNode, currentNode

		let currentIndex = 0
		currentNode = this.head

		// to check the first element in the list
		if (currentNode.element === element) {
			const deletedNode = currentNode
			this.head = currentNode.next
			return deletedNode
		}

		while (currentNode) {
			if (currentNode.element === element) {
				const deletedNode = currentNode
				previousNode.next = currentNode.next
				return deletedNode
			}
			currentIndex++

			previousNode = currentNode
			currentNode = currentNode.next
		}

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

		let currentNode = this.head

		while (currentNode) {
			NodeArray.push(currentNode.element)
			currentNode = currentNode.next
		}

		return NodeArray
	}

	printList() {
		let currentNode = this.head

		while (currentNode) {
			console.log(currentNode.element)
			currentNode = currentNode.next
		}
	}
}

const conga = new LinkedList()
conga.insert(1)
conga.insert(2)
conga.insert(3)
conga.insert(4)
console.log(conga.deleteElement(2))
console.log(conga.deleteElement(5))
console.log(conga.printList())
console.log(conga.indexOf(1))

console.log(conga.toArray())

// Linked List queue
// queue needs to be accessed from the head and the tail so we need to implement a doubly linked list so enqueue/dequeue from head and tail will be constant time.

class DNode {
	constructor(element) {
		this.prev = null
		this.element = element
		this.next = null
	}
}

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

class Queue {
	constructor() {
		this.storage = new DoublyLinkedList()
	}

	enqueue(element) {
		this.storage.insertAtBeginning(element)
	}

	dequeue() {
		this.storage.deleteAtEnd()
	}

	size() {
		this.storage._length
	}

	toArray() {
		this.storage.toArray()
	}

	printCollection() {
		this.storage.printCollection()
	}
}
