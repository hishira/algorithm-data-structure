import { TreeElement } from "./TreeElement";
import { Comperable } from "./Comparable";
export class BinaryTree<T extends Comperable<T>>{
    private root: TreeElement<T>;
    constructor() {
        this.root = null;
    }
    private TravesreTree(t: TreeElement<T>): void {
        if (t !== null) {
            this.TravesreTree(t.right);
            console.log(t.GetValue());
            this.TravesreTree(t.left);
        }
    }
    public insert(newelement: T): boolean {
        if (this.root === null) {
            this.root = new TreeElement<T>(newelement);
            return true;
        }
        let tmproot: TreeElement<T> = this.root;
        let parrent: TreeElement<T> = null
        while (tmproot !== null) {
            parrent = tmproot;
            if (tmproot.GetValue().equals(newelement) === -1)
                tmproot = tmproot.right;
            else tmproot = tmproot.left;
        }
        if (parrent.GetValue().equals(newelement) === -1) parrent.right = new TreeElement<T>(newelement);
        else parrent.left = new TreeElement<T>(newelement);
        return true;
    }
    public removeElement(elementtoremove:T):boolean{
        /* To implement */
        /* let rootmp: TreeElement<T> = this.root;
        let removeflag: boolean = true;
        let parrent: TreeElement<T> = this.root;
        let elementtoRemoveFromTree: TreeElement<T> = null
        while(rootmp!==null && removeflag){
            parrent = rootmp;
            if(rootmp.GetValue().equals(elementtoremove)===0){
                elementtoRemoveFromTree = rootmp;
            }
            if(rootmp.GetValue().equals(elementtoremove) === -1)
                rootmp = rootmp.right;
            else 
                rootmp = rootmp.left;
        }
        return true; */
        return true;
    }
    public maximum():T{
        let rootmp: TreeElement<T> = this.root;
        while(rootmp.right!==null){
            rootmp = rootmp.right;
        }
        return rootmp.GetValue();
    }
    public minimum():T{
        let rootmp: TreeElement<T> = this.root;
        while(rootmp.left!==null){
            rootmp = rootmp.left;
        }
        return rootmp.GetValue();
    }
    public print(): void {
        let roottmp: TreeElement<T> = this.root;
        this.TravesreTree(roottmp);
    }
}