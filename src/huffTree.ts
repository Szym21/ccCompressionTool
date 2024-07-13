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
    getRoot = () : HuffmanBaseNode => this.root;
    getWeight = () : number => this.root.getWeight();

    compareTo = (otherNode : HuffmanBaseNode) : number => {
        if (this.root.getWeight() < otherNode.getWeight()) return -1;
        else if ( this.root.getWeight()  == otherNode.getWeight()) return 0;
        else return 1; 
    }

}