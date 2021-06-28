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
var lista = new LinkedList();
var arraylist = new ArrayList();
//LinkedListTests(lista);
//ArrayListTests(arraylist);
//RemovingFromLinkedList();
RemovingFromArryList();
