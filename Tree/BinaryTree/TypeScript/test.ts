import { BinaryTree } from "./BinaryTree"
import { Comperable } from "./Comparable";
class Number implements Comperable<Number>{
    public element: number;
    constructor(element: number) {
        this.element = element
    }
    public equals(element: Number): number {
        return this.element > element.element ? 1 : this.element < element.element ? -1 : 0;
    }
    
}
let bt: BinaryTree<Number> = new BinaryTree<Number>();

bt.insert(new Number(12))
bt.insert(new Number(12))
bt.insert(new Number(14))
bt.insert(new Number(19))
bt.insert(new Number(2))
bt.insert(new Number(3))
bt.print();