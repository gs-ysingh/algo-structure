## algo-structure

- Basic JavaScript library to implement common compute science data structure e.g. stack, queue, linkedlist, heap etc.

### Usage
```
npm i algo-structure 
```
or

```
yarn algo-structure 
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