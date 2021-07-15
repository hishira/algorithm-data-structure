import { AbstractSet } from "./AbstractSet";
import { SetNode } from "./SetNode";
export class Set<T> implements AbstractSet<T>{

    private head: SetNode<T>;
    private length: number;
    constructor() {
        this.head = null;
        this.length = 0;
    }

    public add(newelement: T): boolean {
        if (this.head === null) {
            let newNode: SetNode<T> = new SetNode<T>(newelement);
            this.head = newNode;
            this.length += 1;
            return true;
        }
        let tmphead: SetNode<T> = this.head;
        while (tmphead.next !== null) {
            if (tmphead.GetValue() === newelement)
                return false;
            tmphead = tmphead.next;
        }
        if (tmphead.GetValue() === newelement)
            return false;
        let newnode: SetNode<T> = new SetNode<T>(newelement);
        newnode.previous = tmphead;
        tmphead.next = newnode;
        this.length += 1;
        return true;
    }

    public remove(elementtoremove: T): boolean {
        let tmphead: SetNode<T> = this.head;
        if (this.head.GetValue() === elementtoremove) {
            this.head = this.head.next;
            this.length -= 1;
            return true;
        }
        while (tmphead !== null) {
            if (tmphead.GetValue() === elementtoremove) {
                let prev: SetNode<T> = tmphead.previous;
                tmphead.previous.next = tmphead.next;
                tmphead.next.previous = prev;
                this.length -= 1;
                return true;
            }
            tmphead = tmphead.next;
        }
        return false;
    }

    public size(): number {
        return this.length;
    }

    public enumerate(): Array<T> {
        let result: Array<T> = []
        let tmphead: SetNode<T> = this.head;
        while (tmphead !== null) {
            result.push(tmphead.GetValue());
            tmphead = tmphead.next;
        }
        return result;
    }

    public is_empty(): boolean {
        return this.length === 0;
    }

    public is_element_of(elementtocheck: T): boolean {
        let tmphead: SetNode<T> = this.head;
        while (tmphead !== null) {
            if (tmphead.GetValue() === elementtocheck) {
                 return true
            }
            tmphead = tmphead.next;
        }
        return false;
    }

    public static build<T>(...arr:Array<T>):Set<T>{
        let arrres:Array<T> = arr.flatMap((i:T)=>i);
        let s:Set<T> = new Set<T>();
        for(let i=0;i<arrres.length;i++){
            s.add(arrres[i])
        }
        return s
    }
    public static union<T>(firstset:Set<T>, secondset:Set<T>):Set<T>{
        let resultSet:Set<T> = new Set<T>();
        let en1:Array<T> = firstset.enumerate().concat(secondset.enumerate())
        for(let i in en1){
            resultSet.add(en1[i]);
        }
        return resultSet;      
    }
    public static intersection<T>(firstset:Set<T>,secondset:Set<T>):Set<T>{
        let arr1: T[] = firstset.enumerate();
        let arr2: T[] = secondset.enumerate();
        let arr3: T[] = new Array<T>();
        for(let i=0;i<arr1.length;i++){
            for(let j=0;j<arr2.length;j++)
                if(arr1[i] === arr2[j])
                    arr3.push(arr1[i])
        }
        return Set.build(...arr3);
    }
    public print(): void {
        let allset: string = "";
        let tmphead: SetNode<T> = this.head;
        while (tmphead !== null) {
            allset += `${tmphead.GetValue()}, `;
            tmphead = tmphead.next;
        }
        console.log(allset);
    }
}