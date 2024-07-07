type Dictionary<Key extends keyof any, Value> = {
    [key in Key]: Value;
};

export { Dictionary };