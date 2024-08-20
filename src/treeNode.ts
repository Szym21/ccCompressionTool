import { HuffmanBaseNode } from './types';

export class HuffmanTreeNode implements HuffmanBaseNode {
    weight : number;
    left : HuffmanBaseNode;
    right : HuffmanBaseNode;

    constructor(
        left : HuffmanBaseNode, 
        right : HuffmanBaseNode) {
            this.left = left;
            this.right = right;
            this.weight = this.left.getWeight() + this.left.getWeight();
    }

    getLeft = () : HuffmanBaseNode => this.left;
    getRight = () : HuffmanBaseNode => this.right;
    getWeight = () : number => this.weight;
    isLeaf = () : boolean => false;    
}