import { AbstractSet } from "./AbstractSet";
import { SetNode } from "./SetNode";
export class Set<T> implements AbstractSet<T>{

    private head: SetNode<T>;
    constructor() {
        this.head = null;
    }

    public add(newelement: T): boolean {
        if (this.head === null) {
            let newNode: SetNode<T> = new SetNode<T>(newelement);
            this.head = newNode;
            return true;
        }
        let tmphead: SetNode<T> = this.head;
        while (tmphead.next !== null) {
            if(tmphead.GetValue() === newelement)
                return false;
            tmphead = tmphead.next;
        }
        if(tmphead.GetValue() === newelement)
            return false;
        let newnode: SetNode<T> = new SetNode<T>(newelement);
        newnode.previous = tmphead;
        tmphead.next = newnode;
        return true;
    }

    public remove(elementtoremove: T): boolean {
        let tmphead: SetNode<T> = this.head;
        if(this.head.GetValue() === elementtoremove){
            this.head = this.head.next;
            return true;
        }
        while(tmphead!==null){
            if(tmphead.GetValue() === elementtoremove){
                let prev: SetNode<T> = tmphead.previous;
                tmphead.previous.next = tmphead.next;
                tmphead.next.previous = prev;
                return true;
            }
            tmphead = tmphead.next;
        }
        return false;
    }

    public print():void{
        let allset: string = "";
        let tmphead: SetNode<T> = this.head;
        while(tmphead !== null){
            allset += `${tmphead.GetValue()}, `;
            tmphead = tmphead.next;
        }
        console.log(allset);
        
    }
}