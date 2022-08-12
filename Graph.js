/**
 * Use adjacency list if there aren't that many edges relative to all possible edges (use for sparse graphs)
 * Use adjacency matrix if the graph is very dense (large number of edges)
 * Use incidence matrix if you need to know the relation of nodes and its edges, usually used in weighted graphs (edges with weight)
 */

class Graph {
	constructor() {
		this.adjList = new Map()
	}

	addNode(node) {
		this.adjList.set(node, [])
	}

	addEdge(origin, destination) {
		// undirected graph
		this.adjList.get(origin).push(destination)
		this.adjList.get(destination).push(origin)
	}

	dfsDirected(source = this.adjList.keys().next().value) {
		for (const neighbor of this.adjList.get(source)) {
			this.dfsDirected(neighbor)
		}
	}

	dfsDirectedIterative(source = this.adjList.keys().next().value) {
		let stack = [source]

		while (stack.length) {
			let current = stack.pop()

			for (const neighbor of this.adjList.get(current)) {
				stack.push(neighbor)
			}
		}
	}

	bfsDirected(source = this.adjList.keys().next().value) {
		let queue = [source]

		while (queue.length) {
			let current = queue.shift()

			for (const neighbor of this.adjList.get(current)) {
				queue.push(neighbor)
			}
		}
	}

	bfsUndirected(startingNode = this.adjList.keys().next().value) {
		const visited = {}

		const queue = [startingNode]

		visited[startingNode] = true

		while (queue.length) {
			let current = queue.shift()

			for (const neighbor of this.adjList.get(current)) {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					queue.push(neighbor)
				}
			}
		}
	}

	dfsUndirectedIterative(startingNode = this.adjList.keys().next().value) {
		const visited = {}

		visited[startingNode] = true

		const stack = [startingNode]

		while (stack.length) {
			let current = stack.pop()
			for (const neighbor of this.adjList.get(current)) {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					stack.push(neighbor)
				}
			}
		}
	}
}

const graphAdjList = new Graph()

graphAdjList.addNode("a")
graphAdjList.addNode("b")
graphAdjList.addNode("c")
graphAdjList.addNode("d")
graphAdjList.addNode("e")
graphAdjList.addNode("f")
graphAdjList.addEdge("a", "c")
graphAdjList.addEdge("a", "b")
graphAdjList.addEdge("b", "d")
graphAdjList.addEdge("c", "e")
graphAdjList.addEdge("d", "f")

console.log(graphAdjList.adjList)
