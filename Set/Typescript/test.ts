import {Set} from "./Set"

const set:Set<number> = new Set<number>();

console.log("Adding element to set");

set.add(12);
set.add(12);
set.add(45);
set.add(90);
set.add(45);
set.add(80);
set.print();
