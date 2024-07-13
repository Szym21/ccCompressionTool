"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuffmanLeafNode = void 0;
class HuffmanLeafNode {
    constructor(weight, element) {
        this.getValue = () => this.element;
        this.getWeight = () => this.weight;
        this.isLeaf = () => true;
        this.element = element;
        this.weight = weight;
    }
}
exports.HuffmanLeafNode = HuffmanLeafNode;
//# sourceMappingURL=leafNode.js.map