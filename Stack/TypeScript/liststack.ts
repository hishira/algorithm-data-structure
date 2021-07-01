import { Stack } from "./stack";
import { NodeElement } from "./liststacknode";
export class ListStack<T> implements Stack<T>{
    private head: NodeElement<T> | null;
    private tail: NodeElement<T> | null;
    private _length: number;
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }
    public push(element: T): boolean {
        let newnode: NodeElement<T> = new NodeElement<T>(element);
        if (this.head === null) {
            this.head = newnode
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
    public peek(): T {
        return this.tail.GetValue();
    }
    public pop(): T {
        if (this.head === null) {
            return null;
        }
        let returnvalue: T = this.tail.GetValue();
        let prev: NodeElement<T> = this.tail.previous;
        if (prev === null) {
            let val:T = this.head.GetValue();
            this.head = null;
            this.tail = null;
            this._length-=1;
            return val;
        }
        this.tail = prev;
        this.tail.next = null;
        this._length -= 1;
        return returnvalue;
    }
    public isEmpty(): boolean {
        return this._length === 0;
    }
    public print():void{
        let tmpnode:NodeElement<T> = this.head;
        let s:string = "";
        while(tmpnode !== null){
            s+=tmpnode.GetValue()+", ";
            tmpnode = tmpnode.next;
        }
        console.log(s);
    }
}