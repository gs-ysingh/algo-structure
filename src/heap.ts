function swap(array: Array<any>, sourceIndex: number, targetIndex: number) {
    let temp = array[sourceIndex];
    array[sourceIndex] = array[targetIndex];
    array[targetIndex] = temp;
}

class Heap<T> {
    protected size: number;
    protected heap: Array<T>;

    constructor() {
        this.heap = [];
        this.size = 0;
    }

    parent(index: number) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index: number) {
        return 2 * index + 1;
    }

    rightChild(index: number) {
        return 2 * index + 2;
    }

    isLeaf(index: number) {
        return this.heap[this.leftChild(index)] === undefined && this.heap[this.rightChild(index)] === undefined;
    }

    getHeap() {
        return this.heap;
    }
}

class MinHeap<T> extends Heap<T> {
    insert(item: T) {
        this.heap[this.size] = item;
        let current = this.size;

        while (this.heap[current] < this.heap[this.parent(current)]) {
            swap(this.heap, current, this.parent(current));
            current = this.parent(current);
        }
        this.size++;
    }

    getMin() {
        return this.size === 0 ? null : this.heap[0];
    }

    heapify(index: number) {
        if (!this.isLeaf(index)) {
            const left = this.leftChild(index);
            const right = this.rightChild(index);
            if (this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right]) {
                const min = this.heap[left] <= this.heap[right] ? left : right;
                swap(this.heap, index, min);
                this.heapify(min);
            }
        }
    }

    buildHeap(array: Array<T>) {
        this.heap = array;
        this.size = array.length;

        for(let i = this.size - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    extractMin() {
        if (this.size === 0) {
            return null;
        } else if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        } else {
            const ref = this.heap[0];
            this.heap[0] = this.heap[this.size - 1];
            this.heap.pop();
            this.size--;
            this.heapify(0);
            return ref;
        }
    }
}

class MaxHeap<T> extends Heap<T> {
    insert(item: T) {
        this.heap[this.size] = item;
        let current = this.size;

        while (this.heap[current] > this.heap[this.parent(current)]) {
            swap(this.heap, current, this.parent(current));
            current = this.parent(current);
        }
        this.size++;
    }

    getMax() {
        return this.size === 0 ? null : this.heap[0];
    }

    heapify(index: number) {
        if (!this.isLeaf(index)) {
            const left = this.leftChild(index);
            const right = this.rightChild(index);
            if (this.heap[index] < this.heap[left] || this.heap[index] < this.heap[right]) {
                const max = this.heap[left] >= this.heap[right] ? left : right;
                swap(this.heap, index, max);
                this.heapify(max);
            }
        }
    }

    buildHeap(array: Array<T>) {
        this.heap = array;
        this.size = array.length;

        for(let i = this.size - 1; i >= 0; i--) {
            this.heapify(i);
        }
    }

    extractMax() {
        if (this.size === 0) {
            return null;
        } else if (this.size === 1) {
            this.size--;
            return this.heap.pop();
        } else {
            const ref = this.heap[0];
            this.heap[0] = this.heap[this.size - 1];
            this.heap.pop();
            this.size--;
            this.heapify(0);
            return ref;
        }
    }
}

export { MinHeap, MaxHeap };