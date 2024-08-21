"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCreator = void 0;
const treeNode_1 = require("./treeNode");
class TreeCreator {
    constructor() {
        this.huffmanCodes = {};
    }
    createTree(nodes) {
        while (nodes.items.length > 1) {
            let firstNode = nodes.dequeue();
            let secondNode = nodes.dequeue();
            if (firstNode === undefined || secondNode === undefined)
                throw new Error();
            const leftNode = firstNode.priority < secondNode.priority ? firstNode : secondNode;
            const rightNode = firstNode.priority < secondNode.priority ? firstNode : secondNode;
            nodes.enqueue({
                priority: leftNode.priority + rightNode.priority,
                value: new treeNode_1.HuffmanTreeNode(leftNode.value, rightNode.value),
            });
        }
        return nodes;
    }
    generateHuffmanCodes(node, code) {
        if (node.isLeaf()) {
            this.huffmanCodes[node.element] = code;
        }
        else {
            this.generateHuffmanCodes(node.left, code + '0');
            this.generateHuffmanCodes(node.right, code + '1');
        }
    }
    generateHuffmanCodesWithPrefixes(huffmanTree) {
        this.generateHuffmanCodes(huffmanTree.peek().value, '');
        return this.huffmanCodes;
    }
    ;
}
exports.TreeCreator = TreeCreator;
//# sourceMappingURL=treeCreator.js.map