import { HuffmanBaseNode } from './types';
import { HuffmanLeafNode } from './leafNode';
import { HuffmanTreeNode } from './treeNode';

export class HuffTree {
    root : HuffmanBaseNode;
    
    constructor(
        weight : number,
        element? : string, 
        right? : HuffmanBaseNode, 
        left? : HuffmanBaseNode) {
            if (element !== undefined){
                this.root = new HuffmanLeafNode(weight, element);
            }
            else if (right !== undefined && left !== undefined){
                this.root = new HuffmanTreeNode(left, right, weight);
            }
            else {
                throw new Error("Cannot create HuffTreeNode");
            }

    }

}