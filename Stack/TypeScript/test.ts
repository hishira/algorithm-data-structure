import {ListStack} from "./liststack";


let newstack:ListStack<number> = new ListStack<number>();

// Push test
newstack.push(12);
newstack.push(30);
newstack.push(50);
newstack.push(45);
newstack.push(60);
newstack.print();
// Pop & is_Empty tests
while(!newstack.isEmpty()){
    console.log(newstack.pop())
}
console.log(newstack.pop());
//Peek tests
newstack.push(45);
newstack.push(43);
newstack.push(90);
console.log(newstack.peek());