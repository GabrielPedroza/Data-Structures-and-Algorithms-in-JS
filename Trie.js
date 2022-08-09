/**
 * Tries are just like trees but mainly stores characters
 *
 * @Access O(N) unless you access the root node
 * @Search O(N) memory is not contiguous
 * @Insertion O(1) but is in total a O(N) because you need to search
 * @Deletion O(N) this depends but in the example written below is solved quadratically
 */

class Node {
	constructor() {
		this.keys = new Map()
		this.end = false
	}

	setEnd() {
		this.end = true
	}
}

class Trie {
	constructor() {
		this.root = new Node()
	}

	add(input, node = this.root) {
		if (input.length === 0) {
			node.setEnd()
			return
		}

		if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node())
			return this.add(input.substr(1), node.keys.get(input[0]))
		}

		if (node.keys.has(input[0])) {
			return this.add(input.substr(1), node.keys.get(input[0]))
		}
	}

	isWord(word) {
		let node = this.root

		while (word.length > 0) {
			if (!node.keys.has(word[0])) return false

			if (word.length === 1) {
				return node.keys.get(word[0]).end === true ? true : false
			}

			node = node.keys.get(word[0])
			word = word.substr(1)
		}
	}

	print() {
		let resultWords = []
		const search = (node, string) => {
			if (node.keys.size) {
				// .keys() is what is used to iterate in a map
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter[0]), string.concat(letter))
				}

				if (node.end) {
					resultWords.push(string)
				}
			} else {
				return string.length > 0 && resultWords.push(string)
			}
		}

		search(this.root, new String())
		return resultWords
	}
}

const myTrie = new Trie()

myTrie.add("gayb")
myTrie.add("gabe")
myTrie.add("pedroza")
myTrie.delete("gabe")
// console.log(myTrie.delete("gabe"))

console.log(myTrie.print())
/**
 * @Maps
 *
 * I figured I'll put it here because maps are used in tries but you can use a map
 */
