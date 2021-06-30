"use strict";
exports.__esModule = true;
var linkedlist_1 = require("./linkedlist");
var arraylist_1 = require("./arraylist");
var doublelinkedlist_1 = require("./doublelinkedlist");
function appendToListTest(lista) {
    lista.append(10);
    lista.append(12);
    lista.append(15);
}
function getelementtest(lista) {
    console.log("First element :" + lista.getFirstElement());
    console.log("Last element : " + lista.getLastElement());
    console.log("Element at 0 position " + lista.getElementAtPosition(0));
    console.log("Element at 2 position " + lista.getElementAtPosition(2));
    lista.removeLast();
    console.log("Element at 0 position " + lista.getElementAtPosition(0));
    console.log("Element at 1 position " + lista.getElementAtPosition(1));
    console.log("Element at 2 position " + lista.getElementAtPosition(2));
}
function otherFunctionTest(lista) {
    lista.print();
    lista.removeFirst();
    lista.print();
    console.log(lista.isEmpty());
    console.log(lista.length());
}
function LinkedListTests(lista) {
    console.log("<======== Linked list tests =========>");
    appendToListTest(lista);
    getelementtest(lista);
    otherFunctionTest(lista);
}
function appendToArrayList(lista) {
    lista.append(10);
    lista.append(12);
    lista.append(15);
    lista.print();
}
function removeLastFirstArrayTest(lista) {
    lista.removeLast();
    lista.removeFirst();
    lista.print();
}
function getElementFromArrayListTest(lista) {
    console.log("First element " + lista.getFirstElement());
    console.log("Last element " + lista.getLastElement());
    console.log("Middle element " + lista.getElementAtPosition(Math.floor(lista.length() / 2)));
}
function ArrayListTests(lista) {
    console.log("Append to list");
    appendToArrayList(lista);
    getElementFromArrayListTest(lista);
    console.log("Remove first last from list");
    removeLastFirstArrayTest(lista);
    getElementFromArrayListTest(lista);
}
function LinkedListRemoveAtFirstAndLastPosition() {
    var lista = new linkedlist_1.LinkedList();
    lista.append(10);
    lista.append(25);
    lista.append(45);
    lista.append(90);
    console.log("Delete first and last");
    lista.print();
    lista.removeAtPosition(0);
    lista.removeAtPosition(lista.length() - 1);
    lista.print();
}
function RemoveValueFromPositionLinkedList() {
    var lista = new linkedlist_1.LinkedList();
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
    var lista = new arraylist_1.ArrayList();
    lista.append(10);
    lista.append(25);
    lista.append(45);
    lista.append(90);
    console.log("Delete first and last");
    lista.print();
    lista.removeAtPosition(0);
    lista.removeAtPosition(lista.length() - 1);
    lista.print();
}
function RemoveValueFromPositionArrayList() {
    var lista = new arraylist_1.ArrayList();
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
function DoubleLinkedListAppendTest(lista) {
    console.log("Append test on double linked list");
    lista.append(45);
    lista.append(56);
    lista.append(78);
    lista.print();
}
function DoubleLinkedListRemoveLastTests() {
    console.log("Remove last element on list");
    var lista = new doublelinkedlist_1.DoubleLinkedList();
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
function DoubleLinkedListRemoveFirstTests() {
    console.log("Remove first element on list");
    var lista = new doublelinkedlist_1.DoubleLinkedList();
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
function DoubleLinkedListRemoveAtPositionTests() {
    console.log("Remove at position 1 and 2 element on list");
    var lista = new doublelinkedlist_1.DoubleLinkedList();
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
function DoubleLinkedListLengthAndEmptyTests() {
    console.log("Check length and empty");
    var lista = new doublelinkedlist_1.DoubleLinkedList();
    lista.append(40);
    lista.append(50);
    lista.append(60);
    lista.append(70);
    lista.append(80);
    console.log("Double linkedlist length " + lista.length());
    console.log("Double linkedlist is empty " + lista.isEmpty());
}
function DeoubleLinkedListGetElementTests() {
    console.log("Get element from double linked lists");
    var lista = new doublelinkedlist_1.DoubleLinkedList();
    lista.append(40);
    lista.append(50);
    lista.append(60);
    lista.append(70);
    lista.append(80);
    lista.print();
    console.log("First element " + lista.getFirstElement());
    console.log("First element " + lista.getLastElement());
    console.log("Element at 1 index " + lista.getElementAtPosition(1));
    console.log("Element at 2 index " + lista.getElementAtPosition(2));
}
function DoubleLinkedListTests() {
    var lista = new doublelinkedlist_1.DoubleLinkedList();
    DoubleLinkedListAppendTest(lista);
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
