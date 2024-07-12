import { HuffmanBaseNode } from './types';

export class HuffmanTreeNode implements HuffmanBaseNode {
    weight : number;
    left : HuffmanBaseNode;
    right : HuffmanBaseNode;

    constructor(
        left : HuffmanBaseNode, 
        right : HuffmanBaseNode, 
        weight : number) {
            this.left = left;
            this.right = right;
            this.weight = weight;
    }

    getLeft = () : HuffmanBaseNode => this.left;
    getRight = () : HuffmanBaseNode => this.right;
    getWeight = () : number => this.weight;
    isLeaf = () : boolean => false;    
}