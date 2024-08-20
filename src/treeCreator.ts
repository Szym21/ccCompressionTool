import { HuffmanTreeNode } from './treeNode';
import { HuffmanBaseNode, PriorityQueue } from './types'

export class TreeCreator{
    createTree(nodes : PriorityQueue<HuffmanBaseNode>){
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
    }
}