var NodeElement = /** @class */ (function () {
    function NodeElement(value) {
        this.value = value;
        this.next = null;
    }
    return NodeElement;
}());
var NodeElementDouble = /** @class */ (function () {
    function NodeElementDouble(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
    return NodeElementDouble;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.listlength = 0;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new NodeElement(value);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = null;
            this.listlength += 1;
            return;
        }
        var headtmp = this.head;
        while (headtmp.next !== null)
            headtmp = headtmp.next;
        headtmp.next = newNode;
        this.listlength += 1;
    };
    LinkedList.prototype.removeLast = function () {
        var headtmp = this.head;
        if (headtmp === null || headtmp.next === null) {
            this.head = null;
            this.listlength -= 1;
            return true;
        }
        if (headtmp.next.next === null) {
            headtmp.next = null;
            this.listlength -= 1;
            return true;
        }
        try {
            while (headtmp.next.next !== null) {
                headtmp = headtmp.next;
            }
            headtmp.next = null;
            this.listlength -= 1;
            return true;
        }
        catch (e) {
            return false;
        }
    };
    LinkedList.prototype.removeFirst = function () {
        if (this.head === null) {
            return false;
        }
        this.head = this.head.next;
        this.listlength -= 1;
        return true;
    };
    LinkedList.prototype.removeAtPosition = function (position) {
        var is_int = Math.floor(position) === position;
        if (!is_int ||
            (this.listlength - 1) < position ||
            position < 0) {
            return false;
        }
        if (position === 0) {
            this.removeFirst();
            return false;
        }
        else if (position === this.listlength - 1) {
            this.removeLast();
            return true;
        }
        var nodeTmp = this.head;
        var previousNode = this.head;
        var count = 0;
        while (nodeTmp !== null) {
            if (count === position) {
                var nextelement = nodeTmp.next;
                previousNode.next = nextelement;
                return true;
            }
            count += 1;
            previousNode = nodeTmp;
            nodeTmp = nodeTmp.next;
        }
    };
    LinkedList.prototype.print = function () {
        var s = "";
        var headtmp = this.head;
        while (headtmp !== null) {
            s += String(headtmp.value) + " ";
            headtmp = headtmp.next;
        }
        console.log(s);
    };
    LinkedList.prototype.isEmpty = function () {
        return this.listlength === 0;
    };
    LinkedList.prototype.length = function () {
        return this.listlength;
    };
    LinkedList.prototype.getFirstElement = function () {
        return this.head === null ? null : this.head.value;
    };
    LinkedList.prototype.getLastElement = function () {
        var headtmp = this.head;
        if (headtmp === null)
            return null;
        while (headtmp.next !== null)
            headtmp = headtmp.next;
        return headtmp.value;
    };
    LinkedList.prototype.getElementAtPosition = function (position) {
        var is_int = Math.floor(position) === position;
        if (!is_int ||
            (this.listlength - 1) < position ||
            position < 0) {
            return null;
        }
        var counter = 0;
        var headTmp = this.head;
        while (headTmp !== null) {
            if (counter === position)
                return headTmp.value;
            counter += 1;
            headTmp = headTmp.next;
        }
        return null;
    };
    return LinkedList;
}());
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.elements = [];
        this._length = 0;
    }
    ArrayList.prototype.append = function (element) {
        this.elements.push(element);
        this._length += 1;
    };
    ArrayList.prototype.print = function () {
        var allelements = "";
        for (var i = 0; i < this._length; i++) {
            allelements += String(this.elements[i]) + " ";
        }
        console.log(allelements);
    };
    ArrayList.prototype.removeLast = function () {
        if (this.elements.length > 0) {
            this.elements.length -= 1;
            this._length -= 1;
            return true;
        }
        return false;
    };
    ArrayList.prototype.removeFirst = function () {
        for (var i = 0; i < this._length; i++) {
            this.elements[i] = this.elements[i + 1];
        }
        this.elements.length -= 1;
        this._length -= 1;
        return true;
    };
    ArrayList.prototype.removeAtPosition = function (position) {
        var is_int = Math.floor(position) === position;
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0) {
            return false;
        }
        if (position === 0) {
            this.removeFirst();
            return true;
        }
        else if (position === this._length - 1) {
            this.removeLast();
            return true;
        }
        for (var i = position; i < this._length - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }
        this.elements.length -= 1;
        this._length -= 1;
        return true;
    };
    ArrayList.prototype.isEmpty = function () {
        return this._length === 0;
    };
    ArrayList.prototype.length = function () {
        return this._length;
    };
    ArrayList.prototype.getFirstElement = function () {
        return this._length === 0 ? null : this.elements[0];
    };
    ArrayList.prototype.getLastElement = function () {
        return this._length === 0 ? null : this.elements[this._length - 1];
    };
    ArrayList.prototype.getElementAtPosition = function (position) {
        var is_int = Math.floor(position) === position;
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0 ||
            position >= this._length) {
            return null;
        }
        return this.elements[position];
    };
    return ArrayList;
}());
var DoubleLinkedList = /** @class */ (function () {
    function DoubleLinkedList() {
        this.head = null;
        this._length = 0;
    }
    DoubleLinkedList.prototype.append = function (value) {
        var newnode = new NodeElementDouble(value);
        if (this.head === null) {
            this.head = newnode;
            this._length += 1;
            return;
        }
        var nodeTmp = this.head;
        while (nodeTmp.next !== null) {
            nodeTmp = nodeTmp.next;
        }
        nodeTmp.next = newnode;
        nodeTmp.next.previous = nodeTmp;
        this._length += 1;
    };
    DoubleLinkedList.prototype.print = function () {
        var nodeTmp = this.head;
        var s = "";
        while (nodeTmp !== null) {
            s += nodeTmp.value + " ";
            nodeTmp = nodeTmp.next;
        }
        console.log(s);
    };
    DoubleLinkedList.prototype.removeLast = function () {
        if (this.head === null) {
            return false;
        }
        if (this.head.next === null) {
            this.head = null;
            this._length -= 1;
            return true;
        }
        var nextnode = this.head;
        while (nextnode.next !== null)
            nextnode = nextnode.next;
        nextnode.previous.next = null;
        this._length -= 1;
        return true;
    };
    DoubleLinkedList.prototype.removeFirst = function () {
        if (this.head === null) {
            return false;
        }
        if (this.head.next === null) {
            this.head = null;
            this._length -= 1;
            return true;
        }
        this.head = this.head.next;
        this._length -= 1;
        return true;
    };
    DoubleLinkedList.prototype.removeAtPosition = function (position) {
        var is_int = Math.floor(position) === position;
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0) {
            return false;
        }
        if (this.head === null)
            return false;
        if (position === 0) {
            this.removeFirst();
            this._length -= 1;
            return true;
        }
        if (position === this._length - 1) {
            this.removeLast();
            this._length -= 1;
            return true;
        }
        var count = 0;
        var nodetmp = this.head;
        var breakflag = true;
        while (breakflag && nodetmp !== null) {
            nodetmp = nodetmp.next;
            count += 1;
            if (count === position)
                breakflag = false;
        }
        if (nodetmp === null)
            return false;
        nodetmp.previous.next = nodetmp.next;
        nodetmp = null;
        this._length -= 1;
        return true;
    };
    DoubleLinkedList.prototype.isEmpty = function () {
        return this._length === 0;
    };
    DoubleLinkedList.prototype.length = function () {
        return this._length;
    };
    DoubleLinkedList.prototype.getFirstElement = function () {
        if (this.head === null)
            return null;
        return this.head.value;
    };
    DoubleLinkedList.prototype.getLastElement = function () {
        if (this.head === null)
            return null;
        var nodetmp = this.head;
        while (nodetmp.next !== null)
            nodetmp = nodetmp.next;
        return nodetmp.value;
    };
    DoubleLinkedList.prototype.getElementAtPosition = function (position) {
        if (this.head === null)
            return null;
        var is_int = Math.floor(position) === position;
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0) {
            return null;
        }
        if (this.head === null) {
            return null;
        }
        if (position === 0)
            return this.getFirstElement();
        if (position === this._length - 1)
            return this.getLastElement();
        var nodetmp = this.head;
        var breakflag = true;
        var counter = 0;
        while (breakflag && nodetmp.next !== null) {
            nodetmp = nodetmp.next;
            counter += 1;
            if (counter === position)
                breakflag = false;
        }
        if (nodetmp.next === null)
            return null;
        return nodetmp.value;
    };
    return DoubleLinkedList;
}());
;
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
    var lista = new LinkedList();
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
    var lista = new LinkedList();
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
    var lista = new ArrayList();
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
    var lista = new ArrayList();
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
    var lista = new DoubleLinkedList();
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
    var lista = new DoubleLinkedList();
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
    var lista = new DoubleLinkedList();
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
    var lista = new DoubleLinkedList();
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
    var lista = new DoubleLinkedList();
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
    var lista = new DoubleLinkedList();
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
