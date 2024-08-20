type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value;
};

type QueueElement<T> = {
    value: T
    priority: number;
}

class PriorityQueue<T> {
    items : QueueElement<T>[];

    constructor() {
        this.items = [];
    }
    enqueue(item: QueueElement<T>) : void{
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > item.priority) {
              this.items.splice(i, 0, item);
              return;
            }
          }
        this.items.push(item);
    }
    dequeue = () => this.items.shift();
    peek = () => this.items[0];
    isEmpty = () => this.items.length === 0;
}

interface HuffmanBaseNode {
    isLeaf() : boolean;
    getWeight() : number;
}

export { Dictionary, PriorityQueue, HuffmanBaseNode, QueueElement };