## algo-structure

- Basic JavaScript library to implement common compute science data structure e.g. stack, queue, linkedlist, heap etc.

### Usage
```
npm i algo-structure 
```
or

```
yarn add algo-structure 
```

### Import

```
    import { Stack, Queue, List, MaxHeap, MinHeap } from "algo-structure";
```
or

```
    const { Stack, Queue, List, MaxHeap, MinHeap } = require("algo-structure");
```

### Stack
```
import { Stack } from "algo-structure";
const stack = new Stack<number>();
stack.push(1);
stack.pop();
stack.isEmpty();
stack.size();
stack.peek();
```

### Queue
```
import { Queue } from "algo-structure";
const queue = new Queue<number>();
queue.enqueue(1);
queue.top();
queue.dequeue();
queue.isEmpty();
```

### List
```
import { List } from "algo-structure";
const list = new List<number>();
list.insert(1);
list.insert(2);
console.log(list.search(2));
list.delete(2);
list.size();
list.isEmpty();
```

### MinHeap and MaxHeap
```
import { MaxHeap, MinHeap } from "algo-structure";
const h = new MaxHeap();
h.insert(5)
h.insert(3)
h.insert(17)
h.insert(10)
h.insert(84)
h.insert(19)
h.insert(6)
h.insert(22)
h.insert(9)
console.log(h.getHeap());
h.extractMax();
h.getMax();

h.buildHeap([5, 3, 17, 10, 84, 19, 6, 22, 9]);
console.log(h.getHeap());

const h2 = new MinHeap();
h2.insert(5)
h2.insert(3)
h2.insert(17)
h2.insert(10)
h2.insert(84)
h2.insert(19)
h2.insert(6)
h2.insert(22)
h2.insert(9)
console.log(h2.getHeap());
h2.extractMin();
h2.getMin();

h2.buildHeap([5, 3, 17, 10, 84, 19, 6, 22, 9]);
console.log(h2.getHeap());

```