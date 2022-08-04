/**
 * Hash Table
 *
 * @Access O(1) (worst: O(N))
 * @Insertion O(1) (worst: O(N)) (if the hash function is shitty or you inserted a ton of elements)
 * @Deletion O(1) (worst: O(N)) (if the hash function is shitty or you inserted a ton of elements)
 * @Search O(N)
 *
 * It is an array of the value of the storage limit in which contain an array of key values.
 * To store a string in a index, you need the key and the storage limit to create a hash function. It will generate a random number
 * using charCodes and we want to extract the remainder using our storageLimit to get an index below.
 */

const hash = (string, max) => {
	let hash = 0

	for (let i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i)
	}

	return hash % max
}

class Hashmap {
	constructor() {
		this.storage = []
		this.storageLimit = 4
	}

	add(key, value) {
		const index = hash(key, this.storageLimit)
		if (this.storage[index] == null) {
			this.storage[index] = [[key, value]]
		} else {
			let inserted = false
			for (let i = 0; i < this.storage[index].length; i++) {
				// if there is an already existing key array
				if (this.storage[index][i][0] === key) {
					this.storage[index][i][1] = value
					inserted = true
				}
			}
			if (inserted === false) {
				this.storage[index].push([key, value])
			}
		}
	}

	remove(key) {
		const index = hash(key, this.storageLimit)

		if (this.storage[index] == null) return undefined

		for (const el in this.storage) {
			if (this.storage[index][el][0] === key) {
				delete this.storage[index][el]
				return true
			}
			return false
		}
	}

	lookup(key) {
		const index = hash(key, this.storageLimit)

		if (this.storage[index] == null) return undefined

		for (const el in this.storage[index]) {
			if (this.storage[index][el][0] === key) {
				return this.storage[index][el]
			}
		}

		return null
	}

	print() {
		console.log(this.storage)
	}
}
