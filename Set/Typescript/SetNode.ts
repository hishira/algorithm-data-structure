export class SetNode<T>{
    private value: T;
    public next: SetNode<T>;
    public previous: SetNode<T>;
    constructor(value:T){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
    public GetValue(): T { return this.value; }
}