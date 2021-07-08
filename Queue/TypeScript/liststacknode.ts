export class NodeElement<T>{
    private value:T;
    public next: NodeElement<T>;
    public previous: NodeElement<T>;
    constructor(newvalue:T){
        this.value = newvalue;
        this.next = null;
        this.previous = null;
    }
    public GetValue(): T { return this.value }
}