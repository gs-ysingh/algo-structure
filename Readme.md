## data-structure.js

- Basic JavaScript library to implement common compute science data structure e.g. stack, queue, linkedlist, heap etc.

### Stack
```
import { Stack } from "data-structure.js";
const stack = new Stack<number>();
stack.push(1);
stack.pop();
stack.isEmpty();
stack.size();
stack.peek();
```

### Queue
```
import { Queue } from "data-structure.js";
const queue = new Queue<number>();
queue.enqueue(1);
queue.top();
queue.dequeue();
queue.isEmpty();
```