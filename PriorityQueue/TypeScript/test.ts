import { LinkedPriorityQueue } from "./LinkedPriorityQueue";

let queue: LinkedPriorityQueue<number> = new LinkedPriorityQueue<number>();

console.log("Inserting to priority queue");
queue.insert(10);
queue.insert(12, 2);
queue.insert(12, 7);
queue.insert(42, 3);
queue.insert(32, 4);
queue.insert(1, 5)
queue.insert(1, 6)
queue.insert(1, 90)
queue.insert(1, 12)
queue.insert(1, 4)
queue.insert(1, 3)
queue.insert(1, 5)
queue.insert(30, 1090)
queue.insert(1);
queue.print();
console.log(queue.length());
console.log(`Max value: ${queue.maximum()}`);
console.log(`Min value: ${queue.minimum()}`);

