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
		if (node == null) return null
		if (input.length === 0) {
			node.setEnd()
			return
		}

		if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node())
			return this.add(input.substr(1), node.keys.get(input[0]))
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]))
		}
	}

    isWord(word) {
        if (input.length === 0) return true
    }
}
