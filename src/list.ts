class ListNode<T> {
    data: T | null;
    next: ListNode<T> | null;

    constructor() {
        this.data = null;
        this.next = null;
    }
}

class List<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    insert(item: T) {
        const node = new ListNode<T>();
        node.data = item;
        node.next = null;
        if (this.head === null) {
            this.head = node;
        } else {
            let ref = this.head;
            while (ref && ref.next !== null) {
                ref = ref.next;
            }
            ref.next = node;
        }
        return this.head;
    }

    delete(item: T) {
        if (this.head === null || this.head.data === item) {
            return this.head;
        }
        let ref = this.head;
        while (ref && ref.next) {
            if (ref.next.data === item) {
                ref.next = ref.next.next;
                break;
            }
            ref = ref.next;
        }
        return this.head;
    }

    search(item: T) {
        let ref = this.head;
        let index = 0;
        while (ref) {
            if (ref.data === item) {
                return index;
            }
            index++;
            ref = ref.next;
        }
        return -1;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let index = 0;
        let ref = this.head;
        while(ref !== null) {
            ref = ref.next;
            index++;
        }
        return index;
    }
}

export default List;