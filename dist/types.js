"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
class PriorityQueue {
    constructor() {
        this.dequeue = () => this.items.shift();
        this.peek = () => this.items[0];
        this.isEmpty = () => this.items.length === 0;
        this.items = [];
    }
    enqueue(item) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > item.priority) {
                this.items.splice(i, 0, item);
                return;
            }
        }
        this.items.push(item);
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=types.js.map