"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HuffTree = void 0;
const leafNode_1 = require("./leafNode");
const treeNode_1 = require("./treeNode");
class HuffTree {
    constructor(weight, element, right, left) {
        this.getRoot = () => this.root;
        this.getWeight = () => this.root.getWeight();
        this.compareTo = (otherNode) => {
            if (this.root.getWeight() < otherNode.getWeight())
                return -1;
            else if (this.root.getWeight() == otherNode.getWeight())
                return 0;
            else
                return 1;
        };
        if (element !== undefined) {
            this.root = new leafNode_1.HuffmanLeafNode(weight, element);
        }
        else if (right !== undefined && left !== undefined) {
            this.root = new treeNode_1.HuffmanTreeNode(left, right, weight);
        }
        else {
            throw new Error("Cannot create HuffTreeNode");
        }
    }
}
exports.HuffTree = HuffTree;
//# sourceMappingURL=huffTree.js.map