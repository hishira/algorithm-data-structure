class NodeElement<T>{
  public value:T;
  public next:NodeElement<T>;
  constructor(value:T){
    this.value = value
    this.next = null;

  }
}
class NodeElementDouble<T>{
  public value:T;
  public previous: NodeElementDouble<T>;
  public next: NodeElementDouble<T>;
  constructor(value:T){
    this.value = value;
    this.next = null;
    this.previous = null
  }
}
interface List<T>{
  append(value:T):void;
  print():void;
  removeLast():boolean;
  removeFirst():boolean;
  removeAtPosition(position:number):boolean;
  isEmpty():boolean;
  length():number;
  getFirstElement():T | null;
  getLastElement():T | null;
  getElementAtPosition(position:number): T | null;
}
class LinkedList<T> implements List<T>{
  private head:NodeElement<T>;
  private listlength:number;
  constructor(){
    this.head = null;
    this.listlength = 0;

  }

  public append(value:T):void{
    let newNode:NodeElement<T> = new NodeElement<T>(value);
    if(this.head === null){
      this.head = newNode;
      this.head.next = null;
      this.listlength+=1;
      return;
    }
    let headtmp:NodeElement<T> = this.head;
    while(headtmp.next !== null) headtmp = headtmp.next;
    headtmp.next = newNode;
    this.listlength+=1;
  }

  public removeLast():boolean{
      let headtmp:NodeElement<T> = this.head;
      if(headtmp === null || headtmp.next === null){
          this.head = null;
          this.listlength-=1;
          return true;
      }
      if(headtmp.next.next === null){
        headtmp.next = null;
        this.listlength-=1;

        return true;
      }
      try{
        while(headtmp.next.next !== null){
          headtmp = headtmp.next
        }
        headtmp.next = null
        this.listlength-=1;
        return true;
      }catch(e){
        return false;
      }
  }

  public removeFirst():boolean{
    if(this.head === null){
      return false;
    }
    this.head = this.head.next;
    this.listlength-=1;
    return true;
  }

  public removeAtPosition(position:number):boolean{
    let is_int:boolean = Math.floor(position) === position
    if(!is_int ||
      (this.listlength - 1) < position ||
      position < 0){
      return false;
    }
    if(position === 0 ){
      this.removeFirst();
      return false;
    }else if(position === this.listlength -1){
      this.removeLast();
      return true;
    }
    let nodeTmp: NodeElement<T> = this.head;
    let previousNode: NodeElement<T> = this.head;
    let count:number = 0;
    while(nodeTmp!== null){
      if(count === position){
        let nextelement:NodeElement<T> | null = nodeTmp.next;
        previousNode.next = nextelement;
        return true;
      }
      count+=1;
      previousNode = nodeTmp;
      nodeTmp = nodeTmp.next;
    }
  }

  public print():void{
    let s:string = "";
    let headtmp:NodeElement<T> = this.head;
    while(headtmp!== null){
      s += String(headtmp.value)+" ";
      headtmp = headtmp.next;
    }
    console.log(s)
  }

  public isEmpty():boolean{
    return this.listlength === 0;
  }
  public length():number{
    return this.listlength;
  }
  public getFirstElement():T | null{
    return this.head === null? null: this.head.value
  }
  public getLastElement():T | null{
    let headtmp: NodeElement<T> = this.head;
    if(headtmp === null)
      return null;
    while(headtmp.next !== null) headtmp = headtmp.next;
    return headtmp.value
  }

  public getElementAtPosition(position:number):T|null{
    let is_int:boolean = Math.floor(position) === position
    if(!is_int ||
      (this.listlength - 1) < position ||
      position < 0){
      return null;
    }
    let counter:number = 0;
    let headTmp:NodeElement<T> = this.head
    while(headTmp !== null){
      if(counter === position)
        return headTmp.value
      counter+=1;
      headTmp = headTmp.next
    }
    return null;
  }

}
class ArrayList<T> implements List<T>{
  private elements: T[];
  private _length: number;
  constructor(){
    this.elements = [];
    this._length = 0;

  }
  public append(element:T):void{
    this.elements.push(element);
    this._length+=1;
  }

  public print():void{
    let allelements:string = ""
    for(let i=0;i<this._length;i++){
      allelements+= String(this.elements[i])+" "
    }
    console.log(allelements);
  }

  public removeLast():boolean{
    if(this.elements.length > 0){
      this.elements.length-=1
      this._length-=1;
      return true;
    }
    return false;
  }
  public removeFirst():boolean{
    for(let i = 0; i < this._length; i++){
      this.elements[i] = this.elements[i+1]
    }
    this.elements.length-=1;
    this._length -= 1
    return true;
  }
  public removeAtPosition(position:number):boolean{
    let is_int:boolean = Math.floor(position) === position
    if(!is_int ||
      (this._length - 1) < position ||
      position < 0){
      return false;
    }if(position === 0){
      this.removeFirst();
      return true;
    }
    else if(position === this._length - 1){
      this.removeLast();
      return true;
    }
    for(let i = position;i<this._length - 1;i++){
      this.elements[i] = this.elements[i+1];
    }
    this.elements.length-=1;
    this._length-=1;
    return true;
  }
  public isEmpty():boolean{
    return this._length === 0;
  }
  public length():number{
    return this._length;
  }
  public getFirstElement():T | null{
    return this._length === 0? null : this.elements[0];
  }
  public getLastElement(): T | null{
    return this._length === 0? null : this.elements[this._length-1];
  }
  public getElementAtPosition(position:number){
    let is_int:boolean = Math.floor(position) === position
    if(!is_int ||
      (this._length - 1) < position ||
      position < 0 ||
      position >= this._length
    ){
      return null;
    }
    return this.elements[position]
  }
}
class DoubleLinkedList<T> implements List<T>{
  private head:NodeElementDouble<T>;
  private _length:number;
  constructor(){
    this.head = null;
    this._length = 0;
  }
  public append(value:T):void{
    let newnode: NodeElementDouble<T> = new NodeElementDouble<T>(value);
    if(this.head === null){
      this.head = newnode;
      return;
    }
    let nodeTmp:NodeElementDouble<T> = this.head;
    while(nodeTmp.next !== null){
      nodeTmp = nodeTmp.next;
    }
    nodeTmp.next = newnode;
    nodeTmp.next.previous = nodeTmp
  }
  public print():void{
    let nodeTmp:NodeElementDouble<T> = this.head;
    let s:string = "";
    while( nodeTmp!== null ){
      s+=nodeTmp.value+" ";
      nodeTmp = nodeTmp.next;
    }
    console.log(s);
  }
  public removeLast():boolean{return true;}
  public removeFirst():boolean{return true;}
  public removeAtPosition(position:number):boolean{return true;}
  public isEmpty():boolean{return true;}
  public length():number{return 0;}
  public getFirstElement():T | null {return null;}
  public getLastElement():T | null {return null}
  public getElementAtPosition(position:number): T | null{return null;}
};
function appendToListTest(lista:List<number>){
  lista.append(10);
  lista.append(12);
  lista.append(15);

}
function getelementtest(lista:List<number>):void{
  console.log(`First element :${lista.getFirstElement()}`)
  console.log(`Last element : ${lista.getLastElement()}`)
  console.log(`Element at 0 position ${lista.getElementAtPosition(0)}`)
  console.log(`Element at 2 position ${lista.getElementAtPosition(2)}`)
  lista.removeLast();
  console.log(`Element at 0 position ${lista.getElementAtPosition(0)}`)
  console.log(`Element at 1 position ${lista.getElementAtPosition(1)}`)
  console.log(`Element at 2 position ${lista.getElementAtPosition(2)}`)
}
function otherFunctionTest(lista:List<number>):void{
  lista.print();
  lista.removeFirst();
  lista.print();
  console.log(lista.isEmpty());
  console.log(lista.length());

}
function LinkedListTests(lista:List<number>):void{
  console.log("<======== Linked list tests =========>");
  appendToListTest(lista);
  getelementtest(lista);
  otherFunctionTest(lista);
}
function appendToArrayList(lista:List<number>):void{
  lista.append(10);
  lista.append(12);
  lista.append(15);
  lista.print();
}
function removeLastFirstArrayTest(lista:List<number>):void{
  lista.removeLast();
  lista.removeFirst();
  lista.print();
}
function getElementFromArrayListTest(lista:List<number>):void{
  console.log(`First element ${lista.getFirstElement()}`);
  console.log(`Last element ${lista.getLastElement()}`);
  console.log(`Middle element ${lista.getElementAtPosition(Math.floor(lista.length()/2))}`);
}
function ArrayListTests(lista:List<number>):void{
  console.log("Append to list");
  appendToArrayList(lista);
  getElementFromArrayListTest(lista);
  console.log("Remove first last from list");
  removeLastFirstArrayTest(lista);
  getElementFromArrayListTest(lista);
}
function LinkedListRemoveAtFirstAndLastPosition(){
  let lista:List<number> = new LinkedList<number>();
  lista.append(10);
  lista.append(25);
  lista.append(45);
  lista.append(90);
  console.log("Delete first and last");
  lista.print();
  lista.removeAtPosition(0);
  lista.removeAtPosition(lista.length()-1)
  lista.print();
}
function RemoveValueFromPositionLinkedList():void{
  let lista:List<number> = new LinkedList<number>();
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
function ArrayListRemoveAtFirstAndLastPosition(){
  let lista:List<number> = new ArrayList<number>();
  lista.append(10);
  lista.append(25);
  lista.append(45);
  lista.append(90);
  console.log("Delete first and last");
  lista.print();
  lista.removeAtPosition(0);
  lista.removeAtPosition(lista.length()-1)
  lista.print();
}
function RemoveValueFromPositionArrayList():void{
  let lista:List<number> = new ArrayList<number>();
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
function RemovingFromArryList(){
  ArrayListRemoveAtFirstAndLastPosition();
  RemoveValueFromPositionArrayList();
}
function RemovingFromLinkedList(){
  LinkedListRemoveAtFirstAndLastPosition();
  RemoveValueFromPositionLinkedList();
}
function DoubleLinkedListAppendTest(lista:List<number>):void{
  lista.append(45);
  lista.append(56);
  lista.append(78);
  lista.print();
}
function DoubleLinkedListTests() {
  let lista: DoubleLinkedList<number> = new DoubleLinkedList<number>();
  DoubleLinkedListAppendTest(lista)
}
let lista:List<number> = new LinkedList<number>();
let arraylist:List<number> = new ArrayList<number>();
//LinkedListTests(lista);
//ArrayListTests(arraylist);
//RemovingFromLinkedList();
//RemovingFromArryList();
DoubleLinkedListTests();
