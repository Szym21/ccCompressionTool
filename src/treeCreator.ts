import { HuffmanLeafNode } from './leafNode';
import { HuffmanTreeNode } from './treeNode';
import { HuffmanBaseNode, PriorityQueue } from './types'

export class TreeCreator{
    huffmanCodes: { [key: string]: string } = {}; 


    createTree(nodes : PriorityQueue<HuffmanBaseNode>) : PriorityQueue<HuffmanBaseNode>{
        while (nodes.items.length > 1) {
            let firstNode = nodes.dequeue();
            let secondNode = nodes.dequeue();
            if (firstNode === undefined || secondNode === undefined) throw new Error();
            const leftNode = firstNode.priority < secondNode.priority ? firstNode : secondNode;
            const rightNode = firstNode.priority < secondNode.priority ? firstNode : secondNode;
            nodes.enqueue({
              priority: leftNode.priority + rightNode.priority,
              value: new HuffmanTreeNode(leftNode.value, rightNode.value),
            });
          }
        return nodes;
    }

    generateHuffmanCodes(node: HuffmanBaseNode, code: string) {
        if (node.isLeaf()) {
          this.huffmanCodes[(node as HuffmanLeafNode).element] = code;
        } else {
          this.generateHuffmanCodes((node as HuffmanTreeNode).left, code + '0');
          this.generateHuffmanCodes((node as HuffmanTreeNode).right, code + '1');
        }
    }

    generateHuffmanCodesWithPrefixes(huffmanTree: PriorityQueue<HuffmanBaseNode>) : 
    { [key: string]: string }{       
        this.generateHuffmanCodes(huffmanTree.peek().value, '');      
        return this.huffmanCodes;
    };
}