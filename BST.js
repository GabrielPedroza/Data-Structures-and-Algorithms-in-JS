/**
 * Binary Search Tree
 * 
 * @Access average -> log(n) | worst -> O(n)
 * @Search average -> log(n) | worst -> O(n)
 * @Insertion average -> log(n) | worst -> O(n)
 * @Deletion average -> log(n) | worst -> O(n)
 *
 * Ask if the binary search tree will be balanced(h <= 1), complete(different leaf nodes but nodes have to start far-left), full(no child or 2 children only) or perfect
 * 
 */

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

	findMin(node = this.root) {
		// the leftmost branch of a binary search tree
		if (this.root === 0) {
			return null
		}

		let currentNode = node

		const findMinNode = node => {
			if (node.left != null) {
				return findMinNode(node.left)
			}
			return node
		}

		return findMinNode(currentNode)
	}

	findMax(node = this.root) {
		// the rightmost branch of a binary search tree
		if (this.root === 0) {
			return null
		}

		let currentNode = node

		const findMaxNode = node => {
			if (node.right != null) {
				return findMaxNode(node.right)
			}

			return node
		}

		return findMaxNode(currentNode)
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
				if (!node.left) return null
				if (data === node.left.data) {
					return node.left
				}

				return searchTree(node.left)
			} else if (data > node.data) {
				if (!node.right) return null

				if (data === node.right.data) {
					return node.right
				}

				return searchTree(node.right)
			} else if (data === node.data) {
				return node
			} else {
				return null
			}
		}

		return searchTree(node)
	}

	remove(data) {
		if (this.root == null) return null

		let node = this.root

		const searchTree = node => {
			if (node == null) return null
			if (data < node.data) {
				return searchTree(node.left)
			} else if (data > node.data) {
				return searchTree(node.right)
			} else {
				// if child node does not have any children
				if (!node.left && !node.right) {
					node = null
					return
					// if it has one child (on the right)
				} else if (!node.left) {
					node = node.right
					return
					// if it has one child (on the left)
				} else if (!node.right) {
					node = node.left
					return
				} else {
					let replacementNode = this.findMin(node.right)
					node.data = replacementNode.data
					node.right = replacementNode.right
					return
				}
			}
		}

		return searchTree(node)
	}

	preorder() {
		if (this.root == null) {
			return null
		}

		let node = this.root
		const preorderedArrayOfBST = new Set() // every value should be unique unless otherwise specified
		const traverseTree = node => {
			if (node) {
				preorderedArrayOfBST.add(node.data)
				traverseTree(node.left)
				traverseTree(node.right)
			}
		}

		traverseTree(node)
		return [...preorderedArrayOfBST].forEach(i => console.log(i))
	}

	inorder() {
		if (this.root == null) {
			return null
		}

		let node = this.root
		const preorderedArrayOfBST = new Set() // every value should be unique unless otherwise specified
		const traverseTree = node => {
			if (node) {
				traverseTree(node.left)
				preorderedArrayOfBST.add(node.data)
				traverseTree(node.right)
			}
		}

		traverseTree(node)
		return [...preorderedArrayOfBST].forEach(i => console.log(i))
	}

	postorder() {
		if (this.root == null) {
			return null
		}

		let node = this.root
		const preorderedArrayOfBST = new Set() // every value should be unique unless otherwise specified
		const traverseTree = node => {
			if (node) {
				traverseTree(node.left)
				traverseTree(node.right)
				preorderedArrayOfBST.add(node.data)
			}
		}

		traverseTree(node)
		return [...preorderedArrayOfBST].forEach(i => console.log(i))
	}
}
