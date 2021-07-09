import { NodeElement } from "./NodeElement"
import { PriorityQueue } from "./PriorityQueue"

export class LinkedPriorityQueue<T> implements PriorityQueue<T>{
    private head: NodeElement<T>;
    private tail: NodeElement<T>;
    private _length: number;

    constructor() {
        this.head = null;
        this.tail = this.head;
        this._length = 0;
    }
    public insert(element: T, priority: number = 1) {
        let newnode: NodeElement<T> = new NodeElement<T>(element, priority);
        if (this.head === null) {
            this.head = newnode;
            this.head.next = null;
            this.head.previous = null;
            this.tail = this.head;
            this._length += 1;
            return true;
        }
        if (this.head.next === null) {
            if (this.head.GetPriority() < newnode.GetPriority()) {
                newnode.next = this.head;
                this.head.previous = newnode;
                this.head = this.head.previous;
            } else {
                this.head.next = newnode;
                newnode.previous = this.head;
                newnode.next = null;
                this.tail = newnode;
            }
            this._length += 1;
            return true;
        }
        if (this.head.GetPriority() < newnode.GetPriority()) {
            newnode.next = this.head;
            this.head.previous = newnode;
            this.head = this.head.previous;
            this._length += 1;
            return true;
        }
        let nodemtp: NodeElement<T> = this.head;
        let flag: boolean = false;
        while (nodemtp.next !== null) {
            if (newnode.GetPriority() > nodemtp.GetPriority()) {
                console.log("yes");
                let prevElement: NodeElement<T> = nodemtp.previous;
                nodemtp.previous = null;
                prevElement.next = newnode;
                newnode.previous = prevElement;
                newnode.next = nodemtp;
                nodemtp.previous = newnode;
                this._length += 1;
                return true;
            }
            nodemtp = nodemtp.next;
        }
        if (!flag) {
            if (newnode.GetPriority() > nodemtp.GetPriority()) {
                let prevElement: NodeElement<T> = nodemtp.previous;
                newnode.previous = prevElement
                newnode.next = nodemtp
                nodemtp.previous = newnode;
            } else {
                nodemtp.next = newnode;
                newnode.previous = nodemtp;
                newnode.next = null;
                this.tail = newnode;
            }
        }
        this._length += 1;
        return true;
    }
    public maximum(): T { return null; }

    public minimum(): T { return null; }

    public extract_max(): T { return null }

    public increase_key(element: T, priority: number): T { return null }

    public length(): number { return this._length; }

    public print(): void {
        let allprioque: string = "";
        let nodemtp: NodeElement<T> = this.head;
        while (nodemtp !== null) {
            allprioque += `{val:${nodemtp.GetValue()}, prio:${nodemtp.GetPriority()}}, `;
            nodemtp = nodemtp.next;
        }
        console.log(allprioque);

    }
}