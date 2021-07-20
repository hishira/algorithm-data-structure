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
            if (tmproot.GetValue().equals(newelement) === 1)
                tmproot = tmproot.right;
            else tmproot = tmproot.left;
        }
        if (parrent.GetValue().equals(newelement) === 1) parrent.right = new TreeElement<T>(newelement);
        else parrent.left = new TreeElement<T>(newelement);
        return true;
    }
    public print(): void {
        let roottmp: TreeElement<T> = this.root;
        this.TravesreTree(roottmp);
    }
}