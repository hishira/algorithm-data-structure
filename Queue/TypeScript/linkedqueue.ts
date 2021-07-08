import { NodeElement } from "./liststacknode";
import { Queue } from "./queue";
export class LinkedQueue<T> implements Queue<T>{
    private head: NodeElement<T>;
    private tail: NodeElement<T>;
    private _length: number;
    constructor() {
        this.head = null;
        this.tail = this.head;
    }
    public enqueue(element: T) {
        let newnode: NodeElement<T> = new NodeElement<T>(element);
        if (this.head === null) {
            this.head = newnode;
            this.head.next = null;
            this.head.previous = null;
            this.tail = this.head;
            return true;
        }
        let previous: NodeElement<T> = this.tail;
        this.tail.next = newnode;
        this.tail = this.tail.next;
        this.tail.previous = previous;
        return true;
    }
    public dequeue(): T { return null; }
    public length(): number { return this._length };
    public is_Empyt(): boolean { return this._length === 0 }
    public print():void{
        let tmpnode: NodeElement<T> = this.head;
        let allqueue: string = "";
        while(tmpnode !== null){
            allqueue += tmpnode.GetValue()+", ";
            tmpnode = tmpnode.next;
        }
        console.log(allqueue);
        
    }
}