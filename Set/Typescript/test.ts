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

// Enumarate

console.log(set.enumerate());

// is_element_of

console.log(set.is_element_of(45));
console.log(set.is_element_of(90));

// Build function
Set.build(1,2,3,4,5).print();
Set.build("2","2","4").print();
Set.build([1,2,3,4,3,2]).print();

// Union

let firstsettounion: Set<Number> = Set.build(1,2,3,4);

let secondsettounion: Set<Number> = Set.build(3,4,5,6,7);

let finalSet:Set<Number> = Set.union(firstsettounion,secondsettounion);
finalSet.print();


// Set intersection

let firstsettointersection: Set<number> = Set.build(-1,-2,-3,4,5,4,3);
let secondsettointersection: Set<number> = Set.build(-1,-2,-3,-4,4,3,5,6,4);
let inter: Set<number> = Set.intersection(firstsettointersection,secondsettointersection);
inter.print();