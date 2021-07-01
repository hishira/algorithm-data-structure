import { ListStack } from "./liststack";
import { ArrayStack } from "./arraystack";

function listastacktests() {
    let newstack: ListStack<number> = new ListStack<number>();

    // Push test
    newstack.push(12);
    newstack.push(30);
    newstack.push(50);
    newstack.push(45);
    newstack.push(60);
    newstack.print();
    // Pop & is_Empty tests
    while (!newstack.isEmpty()) {
        console.log(newstack.pop())
    }
    console.log(newstack.pop());
    //Peek tests
    newstack.push(45);
    newstack.push(43);
    newstack.push(90);
    console.log(newstack.peek());
}

function arraystacktests() {
    let arrstack: ArrayStack<number> = new ArrayStack<number>(20);
    // Array stack push tests
    arrstack.push(10);
    arrstack.push(40);
    arrstack.push(50);
    arrstack.push(60);
    arrstack.print();
    // Array peek tests
    console.log(`Arraystack peek test: ${arrstack.peek()}`);
    // Arr pop tests
    while (!arrstack.isEmpty()) console.log(arrstack.pop())
}

arraystacktests();