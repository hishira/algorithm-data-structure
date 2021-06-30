import { List } from "./list"
import { NodeElement } from "./nodeelement"
export class LinkedList<T> implements List<T>{
    private head: NodeElement<T>;
    private listlength: number;
    constructor() {
        this.head = null;
        this.listlength = 0;

    }

    public append(value: T): void {
        let newNode: NodeElement<T> = new NodeElement<T>(value);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = null;
            this.listlength += 1;
            return;
        }
        let headtmp: NodeElement<T> = this.head;
        while (headtmp.next !== null) headtmp = headtmp.next;
        headtmp.next = newNode;
        this.listlength += 1;
    }

    public removeLast(): boolean {
        let headtmp: NodeElement<T> = this.head;
        if (headtmp === null || headtmp.next === null) {
            this.head = null;
            this.listlength -= 1;
            return true;
        }
        if (headtmp.next.next === null) {
            headtmp.next = null;
            this.listlength -= 1;

            return true;
        }
        try {
            while (headtmp.next.next !== null) {
                headtmp = headtmp.next
            }
            headtmp.next = null
            this.listlength -= 1;
            return true;
        } catch (e) {
            return false;
        }
    }

    public removeFirst(): boolean {
        if (this.head === null) {
            return false;
        }
        this.head = this.head.next;
        this.listlength -= 1;
        return true;
    }

    public removeAtPosition(position: number): boolean {
        let is_int: boolean = Math.floor(position) === position
        if (!is_int ||
            (this.listlength - 1) < position ||
            position < 0) {
            return false;
        }
        if (position === 0) {
            this.removeFirst();
            return false;
        } else if (position === this.listlength - 1) {
            this.removeLast();
            return true;
        }
        let nodeTmp: NodeElement<T> = this.head;
        let previousNode: NodeElement<T> = this.head;
        let count: number = 0;
        while (nodeTmp !== null) {
            if (count === position) {
                let nextelement: NodeElement<T> | null = nodeTmp.next;
                previousNode.next = nextelement;
                return true;
            }
            count += 1;
            previousNode = nodeTmp;
            nodeTmp = nodeTmp.next;
        }
    }

    public print(): void {
        let s: string = "";
        let headtmp: NodeElement<T> = this.head;
        while (headtmp !== null) {
            s += String(headtmp.value) + " ";
            headtmp = headtmp.next;
        }
        console.log(s)
    }

    public isEmpty(): boolean {
        return this.listlength === 0;
    }
    public length(): number {
        return this.listlength;
    }
    public getFirstElement(): T | null {
        return this.head === null ? null : this.head.value
    }
    public getLastElement(): T | null {
        let headtmp: NodeElement<T> = this.head;
        if (headtmp === null)
            return null;
        while (headtmp.next !== null) headtmp = headtmp.next;
        return headtmp.value
    }

    public getElementAtPosition(position: number): T | null {
        let is_int: boolean = Math.floor(position) === position
        if (!is_int ||
            (this.listlength - 1) < position ||
            position < 0) {
            return null;
        }
        let counter: number = 0;
        let headTmp: NodeElement<T> = this.head
        while (headTmp !== null) {
            if (counter === position)
                return headTmp.value
            counter += 1;
            headTmp = headTmp.next
        }
        return null;
    }

}