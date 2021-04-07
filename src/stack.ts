class Stack<T> {
    private list: Array<T>;
    private top: number;

    constructor() {
        this.list = [];
        this.top = -1;
    }

    push(item: T) {
        this.list.unshift(item);
        this.top++;
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack is empty";
        }
        this.top--;
        return this.list.shift();
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    peek(): T | null {
        return this.isEmpty() ? null : this.list[0];
    }

    size(): number {
        return this.top + 1;
    }
}

export default Stack;