export class NodeElement<T>{
    private value: T;
    private priority: number;
    public next: NodeElement<T>;
    public previous: NodeElement<T>;
    constructor(value: T, priority: number = 1) {
        this.value = value;
        this.priority = priority;
        this.next = null;
        this.previous = null;
    }

    public GetValue(): T { return this.value; }

    public SetPriority(priority: number): boolean {
        this.priority = priority;
        return true;
    }

    public GetPriority(): number { return this.priority; }
}