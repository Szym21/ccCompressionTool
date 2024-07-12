type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value;
};

interface HuffmanBaseNode {
    isLeaf() : boolean;
    getWeight() : number;
}

export { Dictionary, HuffmanBaseNode };