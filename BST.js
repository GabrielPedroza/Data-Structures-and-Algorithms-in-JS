class Node {
	constructor(data, left = null, right = null) {
		this.data = data
		this.left = left
		this.right = right
	}
}

class BST {
	constructor() {
		this.root = null
	}

	add(data) {
		if (this.root == null) {
			// implicit type coercion.
			this.root = new Node(data)
			return
		}

		let node = this.root

		const searchTree = node => {
			if (data < node.data) {
				if (node.left == null) {
					node.left = new Node(data)
					return
				}
				return searchTree(node.left)
			} else if (data > node.data) {
				if (node.right == null) {
					node.right = new Node(data)
					return
				}
				return searchTree(node.right)
			} else {
				return null // if data is the same as the node.data (you can add it to the else if statement if you want)
			}
		}
		return searchTree(node) // begin the recursion (passing the root node in the parameter)
	}

	findMin() {
		// the leftmost branch of a binary search tree
		if (this.root === 0) {
			return null
		}

		let node = this.root

		const findMinNode = node => {
			if (node.left != null) {
				return findMinNode(node.left)
			}
			return node
		}

		return findMinNode(node)
	}

	findMax() {
		// the rightmost branch of a binary search tree
		if (this.root === 0) {
			return null
		}

		let node = this.root

		const findMaxNode = node => {
			if (node.right != null) {
				return findMaxNode(node.right)
			}

			return node
		}

		return findMaxNode(node)
	}

	find(data) {
		if (this.root === 0) {
			return null
		}

		if (this.root === data) {
			return this.root
		}

		let node = this.root

		const searchTree = node => {
			if (node == null) return null // edge case

			if (data < node.data) {
				if (data === node.left.data) {
					return node.left
				}

				return searchTree(node.left)
			} else if (data > node.data) {
				if (data === node.right.data) {
					return node.right
				}

				return searchTree(node.right)
			} else {
				return node
			}
		}

		return searchTree(node)
	}
}

const myBST = new BST()

myBST.add(1)
myBST.add(2)
myBST.add(3)
myBST.add(4)
myBST.add(5)
myBST.add(6)
myBST.add(7)
myBST.add(8)
myBST.add(15)
myBST.add(79)
myBST.add(46)
myBST.add(32)
myBST.add(97)
myBST.add(12)

console.log(myBST.findMax())
console.log(myBST.findMin())
console.log(myBST.find(8))
