/* this.Heaps */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

/**
 * @Insertion log(N)
 * @Deletion log(N)
 * @Search O(N)
 * @Peek O(1)
 */

class MinHeap {
	constructor() {
		this.heap = []
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2)
	}

	getLeftChildIndex(i) {
		return Math.floor(i * 2 + 1)
	}

	getRightChildIndex(i) {
		return Math.floor(i * 2 + 2)
	}

	swap(i1, i2) {
		;[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
	}

	insert(element) {
		this.heap.push(element)
		this.heapifyUp()
	}

	heapifyUp() {
		let idx = this.heap.length - 1

		if (this.heap.length > 2) {
			// while index we inserted is smaller than parent (smaller element should go on top)
			while (this.heap[idx] < this.heap[this.getParentIndex(idx)]) {
				this.swap(this.getParentIndex(idx), idx)
				// check the parent of the new index position
				idx = this.getParentIndex(idx)
			}
		}
	}

	poll() {
		const removedElement = this.heap[0]
		this.heap[0] = this.heap[this.heap.length - 1]
		this.heap.splice(this.heap.length - 1)
		this.heapifyDown()
		return removedElement
	}

	heapifyDown() {
		let currentIndex = 0

		while (this.heap[this.getLeftChildIndex(currentIndex)]) {
			let smallestChildIndex =
				this.heap[this.getLeftChildIndex(currentIndex)]

			if (
				this.heap[this.getRightChildIndex(currentIndex)] &&
				this.heap[this.getLeftChildIndex(currentIndex)] >
					this.heap[this.getRightChildIndex(currentIndex)]
			) {
				smallestChildIndex = this.getRightChildIndex(currentIndex)
			} else {
				smallestChildIndex = this.getLeftChildIndex(currentIndex)
			}

			if (this.heap[currentIndex] > smallestChildIndex) {
				this.swap(currentIndex, smallestChildIndex)
				currentIndex = smallestChildIndex
			} else {
				return
			}
		}
	}

	sort() {
		const result = this.heap.sort((a, b) => a - b)
		return result
	}
}

class MaxHeap {
	constructor() {
		this.heap = []
	}

	getParentIndex(i) {
		return Math.floor((i - 1) / 2)
	}

	getLeftChildIndex(i) {
		return Math.floor(i * 2 + 1)
	}

	getRightChildIndex(i) {
		return Math.floor(i * 2 + 2)
	}

	swap(i1, i2) {
		// array destructuring. switching values of i1 to i2 and i2 to i1
		;[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
	}

	insert(element) {
		this.heap.push(element)
		this.heapifyUp()
	}

	heapifyUp() {
		let idx = this.heap.length - 1

		if (this.heap.length > 2) {
			// while index we inserted is larger than parent (larger element should go on top)
			while (this.heap[idx] > this.heap[this.getParentIndex(idx)]) {
				this.swap(this.getParentIndex(idx), idx)
				// check the parent of the new index position
				idx = this.getParentIndex(idx)
			}
		}
	}

	poll() {
		const maxValue = this.heap[0]
		this.heap[0] = this.heap[this.heap.length - 1]
		this.heap.splice(this.heap.length - 1)
		this.heapifyDown()
		return maxValue
	}

	heapifyDown() {
		let currentIndex = 0
		// while we have a left child (remember that heaps property follows inputs as a complete tree - from left to right)
		// if we don't have a left child, we definitely won't have a right child
		while (this.heap[this.getLeftChildIndex(currentIndex)]) {
			let biggestChildIndex =
				this.heap[this.getLeftChildIndex(currentIndex)]

			if (
				this.heap[this.getRightChildIndex(currentIndex)] &&
				this.heap[this.getRightChildIndex(currentIndex)] >
					this.heap[this.getLeftChildIndex(currentIndex)]
			) {
				biggestChildIndex = this.getRightChildIndex(currentIndex)
			} else {
				biggestChildIndex = this.getLeftChildIndex(currentIndex)
			}

			if (this.heap[currentIndex] > this.heap[biggestChildIndex]) {
				this.swap(currentIndex, biggestChildIndex)
				currentIndex = biggestChildIndex
			} else {
				return
			}
		}
	}

	sort() {
		let result = this.heap.sort((a, b) => a - b)
		return result
	}
}
