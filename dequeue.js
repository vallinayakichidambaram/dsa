class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        // let lastItem = this.first;
        this.first = this.first.next;
        this.size--;
        return this.size;
    }
    firstNode() {
        return this.first;
    }
}

let newQ = new Queue();
console.log(newQ.enqueue(5))
console.log(newQ.enqueue(10))
console.log(newQ.enqueue(67))
console.log(newQ.firstNode())
console.log(newQ.dequeue());
console.log(newQ.dequeue());
console.log(newQ.dequeue());
console.log(newQ.firstNode())