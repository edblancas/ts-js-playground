1. Arrays (Lists)

Basic Operations
```typescript
const arr: number[] = [1, 2, 3];
arr.push(4);       // Add to the end
arr.pop();         // Remove from the end
arr.unshift(0);    // Add to the start
arr.shift();       // Remove from the start
arr.splice(1, 1);  // Remove 1 element at index 1
```

Iteration
```typescript
arr.forEach(num => console.log(num));     // Iterating
const doubled = arr.map(num => num * 2); // Mapping
const sum = arr.reduce((a, b) => a + b, 0); // Reducing
```

2. Queues

Using an Array
```typescript
const queue: number[] = [];
queue.push(1);    // Enqueue
const front = queue.shift(); // Dequeue
```

3. Double-Ended Queue (Deque)

Using an Array
```typescript
const deque: number[] = [];
deque.push(1);       // Add to the end
deque.unshift(0);    // Add to the start
deque.pop();         // Remove from the end
deque.shift();       // Remove from the start
```

4. Hash Maps (Objects or Map)

Using Map
```typescript
const map = new Map<string, number>();
map.set('key1', 1);         // Insert
const value = map.get('key1'); // Access
map.delete('key1');         // Delete
console.log(map.has('key1')); // Check existence
```

5. Sets

Using Set
```typescript
const set = new Set<number>();
set.add(1);           // Add
set.delete(1);        // Remove
console.log(set.has(1)); // Check existence
```

6. Loops

For Loop
```typescript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

For-of Loop
```typescript
for (const num of arr) {
  console.log(num);
}
```

For-in Loop (For keys in objects/maps)
```typescript
for (const key in obj) {
  console.log(key, obj[key]);
}
```

7. Minimum and Maximum Heaps

Using Libraries
```typescript
// Use libraries like `heap-js` or implement manually
Manual Min-Heap Implementation
```

```typescript
class MinHeap {
  private heap: number[] = [];

  insert(value: number) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extractMin(): number | undefined {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return min;
  }

  private bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  private bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}
```

8. Classes

Defining and Using a Class
```typescript
Copy code
class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null = null;

  append(value: number) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }
}
```

9. Functions

Pure Functions
```typescript
Copy code
function add(a: number, b: number): number {
  return a + b;
}
```

Arrow Functions
```typescript
const multiply = (a: number, b: number): number => a * b;
```

10. Binary Search

Template
```typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Not found
}
```

11. Recursion

Example: Factorial
```typescript
Copy code
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

12. Graphs

Adjacency List
```typescript
Copy code
const graph: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"],
};
```

DFS
```typescript
function dfs(graph: Record<string, string[]>, node: string, visited = new Set<string>()) {
  if (visited.has(node)) return;
  console.log(node);
  visited.add(node);
  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}
```

BFS
```typescript
function bfs(graph: Record<string, string[]>, start: string) {
  const queue = [start];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const node = queue.shift()!;
    if (visited.has(node)) continue;

    console.log(node);
    visited.add(node);
    queue.push(...graph[node]);
  }
}
```

13. Sorting

Custom Sorting
```typescript
arr.sort((a, b) => a - b); // Ascending
arr.sort((a, b) => b - a); // Descending
```

This cheat sheet covers common data structures and algorithms techniques using TypeScript. 
For advanced topics, use TypeScript libraries or build custom implementations.
