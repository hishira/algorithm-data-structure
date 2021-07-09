import { NodeElement } from "./liststacknode";
import { Queue } from "./queue";
export class LinkedQueue<T> implements Queue<T>{
    private head: NodeElement<T>;
    private tail: NodeElement<T>;
    private _length: number;
    constructor() {
        this.head = null;
        this.tail = this.head;
        this._length = 0;
    }
    public enqueue(element: T) {
        let newnode: NodeElement<T> = new NodeElement<T>(element);
        if (this.head === null) {
            this.head = newnode;
            this.head.next = null;
            this.head.previous = null;
            this.tail = this.head;
            this._length += 1;
            return true;
        }
        let previous: NodeElement<T> = this.tail;
        this.tail.next = newnode;
        this.tail = this.tail.next;
        this.tail.previous = previous;
        this._length += 1;
        return true;
    }
    public dequeue(): T | null {
        if(this.head === null)
            return null;
        if(this.head.next === null){
            let returnedValue: T = this.head.GetValue();
            this.head = this.head.next;
            this.tail = this.head;
            this._length -= 1;
            return returnedValue;
        } 
        let next:NodeElement<T> = this.head.next;
        let returnedElement: T = this.head.GetValue();
        this.head = next;
        this.head.previous = null;
        this._length -= 1;
        return returnedElement;
    }
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