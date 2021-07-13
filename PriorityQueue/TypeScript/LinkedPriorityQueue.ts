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
    public maximum(): T {
        return this.head === null ? null : this.head.GetValue();
    }

    public minimum(): T {
        return this.tail === null ? null : this.tail.GetValue();
    }

    public extract_max(): T {
        if (this.head === null) return null;
        let tmpheadvalue: T = this.head.GetValue();
        this.head = this.head.next;
        this._length -= 1;
        return tmpheadvalue;
    }


    public increase_key(element: T, priority: number): T {
        let tmpnode: NodeElement<T> = this.head;
        let secondtmp: NodeElement<T> = this.head;
        let nodetoreplace: NodeElement<T> = null;
        let getflag: boolean = true;
        while (getflag && tmpnode !== null) {
            if (tmpnode.GetValue() === element) {
                let nextelement: NodeElement<T> = tmpnode.next;
                let prevelement: NodeElement<T> = tmpnode.previous
                nodetoreplace = tmpnode;
                nodetoreplace.previous = null;
                nodetoreplace.next = null;
                nodetoreplace.SetPriority(priority);
                prevelement.next = nextelement;
                nextelement.previous = prevelement;
            }
        }
        if (this.head.GetPriority() < nodetoreplace.GetPriority()) {
            nodetoreplace.next = this.head;
            this.head.previous = nodetoreplace;
            this.head = nodetoreplace;
        }
        if (tmpnode === null || nodetoreplace === null) return null;
        while (secondtmp !== null) {
            if (nodetoreplace.GetPriority() > secondtmp.GetPriority()) {
                let prevElement: NodeElement<T> = secondtmp.previous;
                secondtmp.previous = null;
                prevElement.next = nodetoreplace;
                nodetoreplace.previous = prevElement;
                nodetoreplace.next = secondtmp;
                secondtmp.previous = nodetoreplace;
                return nodetoreplace.GetValue();
            }
            if (secondtmp.next === null) {
                secondtmp.next = nodetoreplace;
                nodetoreplace.previous = secondtmp;
                this.tail = nodetoreplace;
            }
        }
        return null
    }

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