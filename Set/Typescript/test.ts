import {Set} from "./Set"

const set:Set<number> = new Set<number>();

console.log("Adding element to set");

// Adding
set.add(12);
set.add(12);
set.add(45);
set.add(90);
set.add(45);
set.add(80);
set.print();

//Removing

set.remove(12)
set.remove(90);
set.print();

//Enumarate

console.log(set.enumerate());

//is_element_of

console.log(set.is_element_of(45));
console.log(set.is_element_of(90));

//Build function
Set.build(1,2,3,4,5).print();
Set.build("2","2","4").print();
Set.build([1,2,3,4,3,2]).print();