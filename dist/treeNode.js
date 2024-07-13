"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuffmanTreeNode = void 0;
class HuffmanTreeNode {
    constructor(left, right, weight) {
        this.getLeft = () => this.left;
        this.getRight = () => this.right;
        this.getWeight = () => this.weight;
        this.isLeaf = () => false;
        this.left = left;
        this.right = right;
        this.weight = weight;
    }
}
exports.HuffmanTreeNode = HuffmanTreeNode;
//# sourceMappingURL=treeNode.js.map