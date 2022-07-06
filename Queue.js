/*
A queue is a FIFO (first in; first out) data structure

Implement this with a doubly linked list. Ask interviewer if we can treat queue as constant time and skip writing for time sake.

Examples can be like a line in the movie theaters, the task queue and microtask queue, a list of operations that need to be done either with priority or not.
*/

const queue = [1, 2, 4, 5, 6, 7, 78, 9, 9, 0] // <--- do this if ur interviewer is fine with linear time complexity

queue.shift() // remove first el

queue.push() // add to end