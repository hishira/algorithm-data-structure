import {LinkedQueue} from "./linkedqueue";
import { Queue } from "./queue";


let queue: LinkedQueue<number> = new LinkedQueue<number>();
console.log("Queue tests enquqeue: ");
queue.enqueue(12);
queue.enqueue(123);
queue.enqueue(1245);
queue.enqueue(12345);
queue.print();
console.log("Queue tests deqeue: ");
console.log(queue.dequeue());
queue.dequeue();
queue.print();
console.log("Queue tests deqeue to empty queue: ");
queue.enqueue(10);
while(!queue.is_Empyt()) queue.dequeue();
queue.print();