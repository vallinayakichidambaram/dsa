class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
      if(this.size === 0) {
        this.first = newNode;
        this.last = newNode;
        this.size++;
        return this.size;
      }
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
      return this.size;
    }

    firstNode() {
        return this.first;
    }
    return 
}


let newQ = new Queue();
console.log(newQ.enqueue(5));
console.log(newQ.enqueue(7));
console.log(newQ.enqueue(9));

console.log(newQ.firstNode());