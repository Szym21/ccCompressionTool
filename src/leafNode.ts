import { HuffmanBaseNode } from './types';

export class HuffmanLeafNode implements HuffmanBaseNode {
    element: string;
    weight : number;

    constructor(weight: number, element: string) {
        this.element = element;
        this.weight = weight;        
    }
    
    getValue  = () : string => this.element
    getWeight = () : number  => this.weight;
    isLeaf = () : boolean => true;
}