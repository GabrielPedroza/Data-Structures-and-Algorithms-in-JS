/**
 * A queue is a FIFO (first in; first out) data structure
 *
 * Implement this with a doubly linked list. Ask interviewer if we can treat queue as constant time and skip writing for time sake.
 * Examples can be like a line in the movie theaters, the task queue and microtask queue, a list of operations that need to be done either with priority or not.
 *
 * Array Queue
 *
 * @Access O(1)
 * @Search O(N)
 * @Insertion O(1) but amortized so worst case is O(N)
 * @Deletion O(N)
 *
 * Doubly Linked List
 *
 * @Access O(N) unless head or tail
 * @Search O(N)
 * @Insertion O(1)
 * @Deletion O(1)
 */

const queue = [1, 2, 4, 5, 6, 7, 78, 9, 9, 0] // <--- do this if ur interviewer is fine with linear time complexity (when using shift method)

queue.shift() // remove first el

queue.push() // add to end

class Node {
	constructor([data, priority]) {
		this.data = data
		this.priority = priority
	}
}

class PriorityQueue {
	constructor() {
		this.length = 0
		this.collection = []
	}

	enqueue(array) {
		const node = new Node(array)

		if (this.collection.length === 0) {
			this.collection.push(node)
		} else {
			let added = false
			for (const el of this.collection) {
				const indexOfElement = this.collection.indexOf(el)
				// higher to lower priority: 1 is highest; n-th is lower
				if (node.priority < el.priority) {
					this.collection.splice(indexOfElement, 0, node)
					added = true
					break
				}
			}

			if (!added) {
				this.collection.push(node)
				return
			}
		}
	}

	printCollection() {
		console.log(this.collection)
	}
}

// the only different method from a priority queue and a regular queue is the enqueue method and the data is an array (the element's data, the priority)
