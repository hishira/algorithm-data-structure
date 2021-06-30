import { List } from "./list";
import { NodeElementDouble } from "./nodeelement";
export class DoubleLinkedList<T> implements List<T>{
    private head: NodeElementDouble<T>;
    private _length: number;
    constructor() {
        this.head = null;
        this._length = 0;
    }
    public append(value: T): void {
        let newnode: NodeElementDouble<T> = new NodeElementDouble<T>(value);
        if (this.head === null) {
            this.head = newnode;
            this._length += 1;
            return;
        }
        let nodeTmp: NodeElementDouble<T> = this.head;
        while (nodeTmp.next !== null) {
            nodeTmp = nodeTmp.next;
        }
        nodeTmp.next = newnode;
        nodeTmp.next.previous = nodeTmp
        this._length += 1;
    }
    public print(): void {
        let nodeTmp: NodeElementDouble<T> = this.head;
        let s: string = "";
        while (nodeTmp !== null) {
            s += nodeTmp.value + " ";
            nodeTmp = nodeTmp.next;
        }
        console.log(s);
    }
    public removeLast(): boolean {
        if (this.head === null) {
            return false;
        }
        if (this.head.next === null) {
            this.head = null;
            this._length -= 1;
            return true;
        }
        let nextnode: NodeElementDouble<T> = this.head;
        while (nextnode.next !== null) nextnode = nextnode.next;
        nextnode.previous.next = null;
        this._length -= 1;
        return true;
    }
    public removeFirst(): boolean {
        if (this.head === null) {
            return false;
        }
        if (this.head.next === null) {
            this.head = null;
            this._length -= 1;
            return true;
        }
        this.head = this.head.next;
        this._length -= 1;
        return true;
    }
    public removeAtPosition(position: number): boolean {
        let is_int: boolean = Math.floor(position) === position
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0) {
            return false;
        }
        if (this.head === null)
            return false;
        if (position === 0) {
            this.removeFirst();
            this._length -= 1;
            return true;
        }
        if (position === this._length - 1) {
            this.removeLast();
            this._length -= 1;

            return true;
        }
        let count: number = 0;
        let nodetmp: NodeElementDouble<T> = this.head;
        let breakflag: boolean = true;
        while (breakflag && nodetmp !== null) {
            nodetmp = nodetmp.next;
            count += 1;
            if (count === position) breakflag = false;
        }
        if (nodetmp === null)
            return false;
        nodetmp.previous.next = nodetmp.next;
        nodetmp = null;
        this._length -= 1;
        return true;
    }
    public isEmpty(): boolean {
        return this._length === 0;
    }
    public length(): number {
        return this._length;
    }
    public getFirstElement(): T | null {
        if (this.head === null)
            return null;
        return this.head.value;
    }
    public getLastElement(): T | null {
        if (this.head === null)
            return null
        let nodetmp: NodeElementDouble<T> = this.head;
        while (nodetmp.next !== null) nodetmp = nodetmp.next;
        return nodetmp.value;
    }
    public getElementAtPosition(position: number): T | null {
        if (this.head === null)
            return null;
        let is_int: boolean = Math.floor(position) === position
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0) {
            return null;
        }
        if (this.head === null) {
            return null;
        }
        if (position === 0)
            return this.getFirstElement();
        if (position === this._length - 1)
            return this.getLastElement();
        let nodetmp: NodeElementDouble<T> = this.head;
        let breakflag: boolean = true;
        let counter: number = 0;
        while (breakflag && nodetmp.next !== null) {
            nodetmp = nodetmp.next;
            counter += 1;
            if (counter === position)
                breakflag = false;
        }
        if (nodetmp.next === null)
            return null;
        return nodetmp.value;
    }
};