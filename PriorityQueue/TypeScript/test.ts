import { LinkedPriorityQueue } from "./LinkedPriorityQueue";

let queue: LinkedPriorityQueue<number> = new LinkedPriorityQueue<number>();

function insert(queue:LinkedPriorityQueue<number>){
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
}
function minmaxvalue(queue:LinkedPriorityQueue<number>){
    console.log(`Max value: ${queue.maximum()}`);
    console.log(`Min value: ${queue.minimum()}`);
    
}
function removingfromqueue(queue:LinkedPriorityQueue<number>){
    console.log(`Queue length ${queue.length()}`);
    queue.extract_max();
    queue.extract_max();
    console.log("After removing");
    queue.print();
    
}
function priorityChange(queue:LinkedPriorityQueue<number>):void{
    console.log("Increasing and decreasing priority value in queue");
    queue.insert(30,20);
    queue.insert(42,-10);
    queue.print(); 
}
console.log("Inserting to priority queue");
insert(queue);
queue.print();
console.log(queue.length());
minmaxvalue(queue);
console.log("Removing from queue maximum");
removingfromqueue(queue);
console.log(`Queue length ${queue.length()}`);
priorityChange(queue);
