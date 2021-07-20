import {Comperable} from "./Comparable";
export class TreeElement<T extends Comperable<T>>{
    private element: T;
    public left: TreeElement<T>;
    public right: TreeElement<T>;
    constructor(newelement:T){
        this.element = newelement;
        this.left = null;
        this.right = null;
    }
    public GetValue():T{
        return this.element;
    }

}