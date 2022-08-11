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
		this.heap = [null]
	}

	getParentIndex(i) {
		return Math.floor(i / 2)
	}

	getLeftChildIndex(i) {
		return Math.floor(i * 2)
	}

	getRightChildIndex(i) {
		return Math.floor(i * 2 + 1)
	}

	swap(i1, i2) {
		;[this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]]
	}

	insert(num) {
		this.heap.push(num)
		// we need at least 2 elements (index 0 is null for ease of use purposes) to start the heap structure
		if (this.heap.length > 2) {
			let idx = this.heap.length - 1
			// the lower the number compared to the parent, the higher it goes onto the heap
			while (this.heap[idx] < this.heap[this.getParentIndex(idx)]) {
				// if the index is not the root node
				if (idx >= 1) {
					this.swap(this.getParentIndex(idx), idx)
					// if the parent is not the root node
					if (this.getParentIndex(idx) > 1) {
						idx = this.getParentIndex(idx)
					} else {
						break
					}
				}
			}
		}
	}

	remove() {
		let smallest = this.heap[1]
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1]
			this.heap.splice(this.heap.length - 1)
			if (this.heap.length == 3) {
				if (this.heap[1] > this.heap[2]) {
					this.swap(1, 2)
				}
				return smallest
			}
			let i = 1
			let left = 2 * i
			let right = 2 * i + 1
			while (
				this.heap[i] >= this.heap[left] ||
				this.heap[i] >= this.heap[right]
			) {
				if (this.heap[left] < this.heap[right]) {
					this.swap(i, left)
					i = 2 * i
				} else {
					this.swap(i, right)
					i = 2 * i + 1
				}
				left = 2 * i
				right = 2 * i + 1
				if (
					this.heap[left] == undefined ||
					this.heap[right] == undefined
				) {
					break
				}
			}
		} else if (this.heap.length == 2) {
			this.heap.splice(1, 1)
		} else {
			return null
		}
		return smallest
	}

	sort() {
		let result = new Array()
		while (this.heap.length > 1) {
			result.push(this.remove())
		}
		return result
	}
}

const myMinHeap = new MinHeap()

myMinHeap.insert(40)
myMinHeap.insert(50)
myMinHeap.insert(27)
myMinHeap.insert(13)
myMinHeap.insert(12)
myMinHeap.insert(11)
myMinHeap.insert(83)
myMinHeap.insert(40)
myMinHeap.insert(91)
myMinHeap.insert(100)
myMinHeap.insert(1)

console.log(myMinHeap.sort())

console.log(myMinHeap)

class MaxHeap {
	constructor() {
		this.heap = [null]
	}

	print() {
		return this.heap
	}

	insert(num) {
		this.heap.push(num)
		if (this.heap.length > 2) {
			let idx = this.heap.length - 1
			while (this.heap[idx] > this.heap[Math.floor(idx / 2)]) {
				if (idx >= 1) {
					;[this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
						this.heap[idx],
						this.heap[Math.floor(idx / 2)],
					]
					if (Math.floor(idx / 2) > 1) {
						idx = Math.floor(idx / 2)
					} else {
						break
					}
				}
			}
		}
	}

	remove() {
		let smallest = this.heap[1]
		if (this.heap.length > 2) {
			this.heap[1] = this.heap[this.heap.length - 1]
			this.heap.splice(this.heap.length - 1)
			if (this.heap.length == 3) {
				if (this.heap[1] < this.heap[2]) {
					;[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
				}
				return smallest
			}
			let i = 1
			let left = 2 * i
			let right = 2 * i + 1
			while (
				this.heap[i] <= this.heap[left] ||
				this.heap[i] <= this.heap[right]
			) {
				if (this.heap[left] > this.heap[right]) {
					;[this.heap[i], this.heap[left]] = [
						this.heap[left],
						this.heap[i],
					]
					i = 2 * i
				} else {
					;[this.heap[i], this.heap[right]] = [
						this.heap[right],
						this.heap[i],
					]
					i = 2 * i + 1
				}
				left = 2 * i
				right = 2 * i + 1
				if (
					this.heap[left] == undefined ||
					this.heap[right] == undefined
				) {
					break
				}
			}
		} else if (this.heap.length == 2) {
			this.heap.splice(1, 1)
		} else {
			return null
		}
		return smallest
	}
}
