export interface Node {
    id: string | number;
    name: string;
    offset: number;
    sub_nodes: Array<Node>;
}

export function generateId(i): number {
    // return Math.floor(Math.random() * Date.now()).toString(16);
    i += 1;
    return i;
}