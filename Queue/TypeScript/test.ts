import {LinkedQueue} from "./linkedqueue";
import { Queue } from "./queue";


let queue: LinkedQueue<number> = new LinkedQueue<number>();
queue.enqueue(12);
queue.enqueue(12);
queue.enqueue(12);
queue.enqueue(12);
queue.print();