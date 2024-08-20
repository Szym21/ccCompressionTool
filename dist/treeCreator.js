"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeCreator = void 0;
const leafNode_1 = require("./leafNode");
const types_1 = require("./types");
class TreeCreator {
    constructor() {
        this.tree = new types_1.PriorityQueue();
    }
    ;
    createTree(letters) {
        for (var i = 0; i < letters.length; i++) {
            this.tree.enqueue({
                priority: letters[i],
                value: new leafNode_1.HuffmanLeafNode(letters[letters[i]])
            });
        }
    }
}
exports.TreeCreator = TreeCreator;
//# sourceMappingURL=treeCreator.js.map