class Queue<T> {
    private list: Array<T>;
    private front: number;
    private rear: number;
    private size: number;

    constructor() {
        this.list = [];
        this.front = 0;
        this.rear  = -1;
        this.size = 0;
    }

    enqueue(item: T) {
        this.list[++this.rear] = item;
        this.size++;
    }

    dequeue(): T {
        const item = this.list[this.front];
        this.front++;
        this.size--;
        return item;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    top() {
        if(this.isEmpty()) {
            return "Queue is empty";
        }
        return this.list[this.front];
    }
}

export default Queue;