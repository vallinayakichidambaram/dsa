class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;  
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
            return ++this.size;
        }

        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
        return ++this.size;
    }

    firstNode(){
        return this.first;
    }
}

let newStack = new Stack();
console.log(newStack.firstNode());
console.log(newStack.push(5));
console.log(newStack.firstNode());
console.log(newStack.push(7));
console.log(newStack.firstNode());
