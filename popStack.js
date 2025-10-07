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
        var node = new Node(val);

        if (!this.first){
            this.first = node;
            this.last = node;
        } else {
            var tmp = this.first;
            this.first=node;
            this.first.next=tmp;
        }

        return ++this.size;
    }
    pop(){
        if(this.size== 0) return undefined;
        var firstNode = new Node(this.first.value);
        if(this.size === 1) {
            this.first = null;
            this.last = null;
            this.size=0;
            return firstNode.value;
        }

        this.first = this.first.next;
        this.size--;
        return firstNode.value;

    }

     firstNode(){
        return this.first;
    }
}

let newStack = new Stack();
newStack.push(5);
newStack.push(10);
newStack.push(2);
newStack.push(6);
console.log(newStack.firstNode())
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());