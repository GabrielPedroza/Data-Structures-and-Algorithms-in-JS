/*
Access Head: O(1)
Access Tail: O(N) (for singly; doubly is O(1))
Access Middle Node: O(N)
Delete Head: O(1)
Delete Tail: O(N) to search + O(1) to remove = O(N) (for doubly it's O(1) because we have a reference to the tail) 
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
		this.head = null
		this.tail = null
		this.length = 0
	}

	prepend(value) {
		const node = new DNode(value)
		if (this.length === 0) {
			this.head = node
			this.tail = node
		} else {
			this.head.prev = node
			node.next = this.head
			this.head = node
		}

		this.length++
		return
	}

	append(value) {
		const node = new DNode(value)

		if (this.length === 0) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		}

		this.length++
		return
	}

	remove(index) {
		if (index < 0 || index >= this.length) return null
		// checking the head
		if (index === 0) {
			if (this.length === 1) {
				this.head = null
				this.tail = null
			} else {
				this.head = this.head.next
				this.head.prev = null
			}

			this.length--
			return
		}
		// checking the tail
		if (index === this.length - 1) {
			this.tail = this.tail.prev
			this.tail.next = null
			this.length--
			return
		}

		let node = this.head
		let nodeIndex = 0
		let passed = false

		while (node) {
			if (nodeIndex === index) {
				node.prev.next = node.next
				node.next.prev = node.prev
				this.length--
				passed = true
				return
			}
			node = node.next
			nodeIndex++
		}

		if (passed) {
			this.length--
		}
		return null
	}

	printList() {
		if (this.length === 0) return null
		if (this.length === 1) return console.log(this.head)
		if (this.length === 2) return console.log(this.head, this.tail)

		let node = this.head

		while (node) {
			console.log(node)
			node = node.next
		}
	}
}
