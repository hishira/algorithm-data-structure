import { List } from "./list";
import { LinkedList } from "./linkedlist";
import { ArrayList } from "./arraylist";
import { DoubleLinkedList } from "./doublelinkedlist";


function appendToListTest(lista: List<number>) {
  lista.append(10);
  lista.append(12);
  lista.append(15);

}
function getelementtest(lista: List<number>): void {
  console.log(`First element :${lista.getFirstElement()}`)
  console.log(`Last element : ${lista.getLastElement()}`)
  console.log(`Element at 0 position ${lista.getElementAtPosition(0)}`)
  console.log(`Element at 2 position ${lista.getElementAtPosition(2)}`)
  lista.removeLast();
  console.log(`Element at 0 position ${lista.getElementAtPosition(0)}`)
  console.log(`Element at 1 position ${lista.getElementAtPosition(1)}`)
  console.log(`Element at 2 position ${lista.getElementAtPosition(2)}`)
}
function otherFunctionTest(lista: List<number>): void {
  lista.print();
  lista.removeFirst();
  lista.print();
  console.log(lista.isEmpty());
  console.log(lista.length());

}
function LinkedListTests(lista: List<number>): void {
  console.log("<======== Linked list tests =========>");
  appendToListTest(lista);
  getelementtest(lista);
  otherFunctionTest(lista);
}
function appendToArrayList(lista: List<number>): void {
  lista.append(10);
  lista.append(12);
  lista.append(15);
  lista.print();
}
function removeLastFirstArrayTest(lista: List<number>): void {
  lista.removeLast();
  lista.removeFirst();
  lista.print();
}
function getElementFromArrayListTest(lista: List<number>): void {
  console.log(`First element ${lista.getFirstElement()}`);
  console.log(`Last element ${lista.getLastElement()}`);
  console.log(`Middle element ${lista.getElementAtPosition(Math.floor(lista.length() / 2))}`);
}
function ArrayListTests(lista: List<number>): void {
  console.log("Append to list");
  appendToArrayList(lista);
  getElementFromArrayListTest(lista);
  console.log("Remove first last from list");
  removeLastFirstArrayTest(lista);
  getElementFromArrayListTest(lista);
}
function LinkedListRemoveAtFirstAndLastPosition() {
  let lista: List<number> = new LinkedList<number>();
  lista.append(10);
  lista.append(25);
  lista.append(45);
  lista.append(90);
  console.log("Delete first and last");
  lista.print();
  lista.removeAtPosition(0);
  lista.removeAtPosition(lista.length() - 1)
  lista.print();
}
function RemoveValueFromPositionLinkedList(): void {
  let lista: List<number> = new LinkedList<number>();
  lista.append(10);
  lista.append(25);
  lista.append(45);
  lista.append(90);
  console.log("Delete position 1");
  lista.print();
  lista.removeAtPosition(1);
  lista.removeAtPosition(1);
  lista.print();
}
function ArrayListRemoveAtFirstAndLastPosition() {
  let lista: List<number> = new ArrayList<number>();
  lista.append(10);
  lista.append(25);
  lista.append(45);
  lista.append(90);
  console.log("Delete first and last");
  lista.print();
  lista.removeAtPosition(0);
  lista.removeAtPosition(lista.length() - 1)
  lista.print();
}
function RemoveValueFromPositionArrayList(): void {
  let lista: List<number> = new ArrayList<number>();
  lista.append(10);
  lista.append(25);
  lista.append(45);
  lista.append(90);
  console.log("Delete position 1");
  lista.print();
  lista.removeAtPosition(1);
  lista.removeAtPosition(1);
  lista.print();
}
function RemovingFromArryList() {
  ArrayListRemoveAtFirstAndLastPosition();
  RemoveValueFromPositionArrayList();
}
function RemovingFromLinkedList() {
  LinkedListRemoveAtFirstAndLastPosition();
  RemoveValueFromPositionLinkedList();
}
function DoubleLinkedListAppendTest(lista: List<number>): void {
  console.log("Append test on double linked list");
  lista.append(45);
  lista.append(56);
  lista.append(78);
  lista.print();
}
function DoubleLinkedListRemoveLastTests(): void {
  console.log("Remove last element on list");
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  lista.append(40);
  lista.append(50);
  lista.append(60);
  console.log("Double linked list before remove");
  lista.print();
  console.log("Double linked list after remove");
  lista.removeLast();
  lista.removeLast();
  lista.print();
}
function DoubleLinkedListRemoveFirstTests(): void {
  console.log("Remove first element on list");
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  lista.append(40);
  lista.append(50);
  lista.append(60);
  console.log("Double linked list before remove");
  lista.print();
  console.log("Double linked list after remove");
  lista.removeFirst();
  lista.removeFirst();
  lista.print();
}
function DoubleLinkedListRemoveAtPositionTests(): void {
  console.log("Remove at position 1 and 2 element on list");
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  lista.append(40);
  lista.append(50);
  lista.append(60);
  lista.append(70);
  lista.append(80);
  console.log("Double linked list before remove");
  lista.print();
  console.log("Double linked list after remove");
  lista.removeAtPosition(1);
  lista.removeAtPosition(2);
  lista.print();
}
function DoubleLinkedListLengthAndEmptyTests(): void {
  console.log("Check length and empty");
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  lista.append(40);
  lista.append(50);
  lista.append(60);
  lista.append(70);
  lista.append(80);
  console.log(`Double linkedlist length ${lista.length()}`)
  console.log(`Double linkedlist is empty ${lista.isEmpty()}`)
}
function DeoubleLinkedListGetElementTests(): void {
  console.log("Get element from double linked lists");
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  lista.append(40);
  lista.append(50);
  lista.append(60);
  lista.append(70);
  lista.append(80);
  lista.print();
  console.log(`First element ${lista.getFirstElement()}`);
  console.log(`First element ${lista.getLastElement()}`);
  console.log(`Element at 1 index ${lista.getElementAtPosition(1)}`);
  console.log(`Element at 2 index ${lista.getElementAtPosition(2)}`);

}
function DoubleLinkedListTests() {
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  DoubleLinkedListAppendTest(lista)
  DoubleLinkedListRemoveLastTests();
  DoubleLinkedListRemoveFirstTests();
  DoubleLinkedListRemoveAtPositionTests();
  DoubleLinkedListLengthAndEmptyTests();
  DeoubleLinkedListGetElementTests();
}

//let lista:List<number> = new LinkedList<number>();
//let arraylist:List<number> = new ArrayList<number>();
//LinkedListTests(lista);
//ArrayListTests(arraylist);
//RemovingFromLinkedList();
//RemovingFromArryList();
DoubleLinkedListTests();
