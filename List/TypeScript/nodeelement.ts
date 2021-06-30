export class NodeElement<T>{
    public value: T;
    public next: NodeElement<T>;
    constructor(value: T) {
        this.value = value
        this.next = null;

    }
}
export class NodeElementDouble<T>{
    public value: T;
    public previous: NodeElementDouble<T>;
    public next: NodeElementDouble<T>;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.previous = null
    }
}