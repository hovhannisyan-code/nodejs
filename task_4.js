class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return false;
        }
        const popped = this.tail;
        const newTail = this.tail.prev;
        if (newTail) {
            newTail.next = null;
            this.tail.prev = null;
        } else {
            this.head = null;
        }
        this.tail = newTail;
        this.length--;

        return popped;
    }

    shift() {
        if (!this.head) {
            return false;
        }
        const shiftedNode = this.head;
        const newHead = this.head.next;
        if (this.head !== this.tail) {
            newHead.prev = null;
            shiftedNode.next = null;
        } else {
            this.tail = null;
        }
        this.head = newHead;
        this.length--;
        return shiftedNode;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    delete(val) {
        return this.indexOf(val) ? this.deleteByIndex(this.indexOf(val)) : console.log(`Value : ${val} not exist`);
    }

    indexOf(val) {
        let currentNode = this.head,
            index = -1;

        while (currentNode !== null) {
            if (val === currentNode.value) {
                return ++index;
            }
            index++;
            currentNode = currentNode.next;
        }
        return false;
    }

    deleteByIndex(index) {
        let removedNode;
        if (index >= this.length) {
            return false;
        }
        if (index === 0) {
            removedNode = this.shift();
        } else if (index === this.length - 1) {
            removedNode = this.pop();
        } else {
            removedNode = this.getNodeAtIndex(index);
            const after = removedNode.next;
            const before = removedNode.prev;
            removedNode.next = null;
            removedNode.prev = null;
            before.next = after;
            after.prev = before;
            this.length--;
        }
        return removedNode;
    }

    getNodeAtIndex(index) {
        if (index >= this.length || index < 0) {
            return false;
        }
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    count() {
        let count = 0;
        let countNode = this.head;
        while (countNode !== null) {
            count++;
            countNode = countNode.next
        }
        return count;
    }

    printList() {
        let array = [];
        let currentList = this.head;
        while (currentList !== null) {
            array.push(currentList.value);
            currentList = currentList.next;
        }

        console.log(array.join(' --- '));
        return this;
    }
}

let list = new List();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.delete(4);
list.pop()
list.shift()
list.push(5);
list.unshift()
console.log(list.printList());