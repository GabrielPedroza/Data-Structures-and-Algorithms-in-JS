/**
 * Binary Search Tree
 *
 * A binary tree will always have at most 2 children because it is binary. A binary search tree is the same concept but the nodes are organized by value
 * (parent is greater than left child and less than right child)
 *
 * @Access average -> log(n) | worst -> O(n)
 * @Search average -> log(n) | worst -> O(n)
 * @Insertion average -> log(n) | worst -> O(n)
 * @Deletion average -> log(n) | worst -> O(n)
 *
 * Ask if the binary search tree will be balanced(h <= 1), complete(different leaf nodes but nodes have to start far-left), full(no child or 2 children only) or perfect
 *
 * If the binary/binary search tree input is huge, do not use recursion anywhere for better time
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
				node.left && traverseTree(node.left)
				node.right && traverseTree(node.right)
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
		const inorderedArrayOfBST = new Set() // every value should be unique unless otherwise specified
		const traverseTree = node => {
			if (node) {
				node.left && traverseTree(node.left)
				inorderedArrayOfBST.add(node.data)
				node.right && traverseTree(node.right)
			}
		}

		traverseTree(node)
		return [...inorderedArrayOfBST].forEach(i => console.log(i))
	}

	postorder() {
		if (this.root == null) {
			return null
		}

		let node = this.root
		const postorderedArrayOfBST = new Set() // every value should be unique unless otherwise specified
		const traverseTree = node => {
			if (node) {
				node.left && traverseTree(node.left)
				node.right && traverseTree(node.right)
				postorderedArrayOfBST.add(node.data)
			}
		}

		traverseTree(node)
		return [...postorderedArrayOfBST].forEach(i => console.log(i))
	}

	minHeight(root = this.root, height = 0) {
		// Corner case. Should never be hit unless the code is
		// called on root = NULL
		if (root == null) return height

		// Base case : Leaf Node. This accounts for height = 0.
		if (root.left == null && root.right == null) return height

		// If left subtree is NULL, recur for right subtree
		if (root.left == null) return this.minHeight(root.right, height++)

		// If right subtree is NULL, recur for left subtree
		if (root.right == null) return this.minHeight(root.left, height++)

		return (
			Math.min(this.minHeight(root.left), this.minHeight(root.right)) + 1
		)
	}

	maxHeight(root = this.root, height = 0) {
		if (root == null) return height

		if (!root.left && !root.right) return height

		if (!root.left) return this.maxHeight(root.right, height++)

		if (!root.right) return this.maxHeight(root.left, height++)

		return (
			Math.max(this.maxHeight(root.left), this.maxHeight(root.right)) + 1
		)
	}

	isBalanced() {
		const min = this.minHeight()
		const max = this.maxHeight()

		return max - min <= 1
	}

	BFS(root = this.root) {
		// always remember BFS uses a queue which uses shift method (qb: quarterback)
		let queue = [root]
		let res = []

		while (queue.length) {
			let curr = queue.shift()
			res.push(curr.data) // pre-order because this is in front of the queue pushes. If middle: in-order. If last: post-order

			curr.left && queue.push(curr.left)
			curr.right && queue.push(curr.right)
		}

		return res
	}

	DFS(root = this.root) {
		let stack = [root] // always remember DFS uses a stack which uses pop method
		let res = []

		while (stack.length) {
			let curr = stack.pop()
			res.push(curr.data) // pre-order because this is in front of the queue pushes. If middle: in-order. If last: post-order

			curr.right && stack.push(curr.right) // optional: reverse these two to start from the left subtree
			curr.left && stack.push(curr.left)
		}

		return res
	}
}

const myTree = new BST()

myTree.add(9)
myTree.add(4)
myTree.add(17)
myTree.add(3)
myTree.add(6)
myTree.add(22)
myTree.add(5)
myTree.add(7)
myTree.add(20)
console.log(myTree.minHeight())
