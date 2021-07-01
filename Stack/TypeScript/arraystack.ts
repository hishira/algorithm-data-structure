import {Stack} from "./stack";

export class ArrayStack<T> implements Stack<T> {
    private array: T[];
    private pointer: number;
    private stacklimit: number;
    private stacklength: number;
    constructor(stacksize:number){
        this.pointer = 0;
        this.stacklength = 0;
        let is_Int:boolean = Math.floor(stacksize) === stacksize;
        if(stacksize <= 0){
            this.array = new Array<T>(10);
            this.stacklimit = 10;
        }
        if (!is_Int){
            this.array = new Array<T>(Math.floor(stacksize));
            this.stacklimit = Math.floor(stacksize);
        }else {
            this.array = new Array<T>(stacksize)
            this.stacklimit = stacksize;
        }
    }
    public push(element: T): boolean{
        if(this.stacklength >= this.stacklimit - 1){
            this.array.length = this.stacklimit + 100;
        }
        this.array[this.pointer] = element;
        this.pointer +=1;
        this.stacklength +=1;
        return true;
    }
    public peek(): T | null{
        return this.pointer === 0?null:this.array[this.pointer - 1];
    }
    public pop(): T | null{
        if(this.pointer <= 0){
            return null;
        }
        let lastval:T = this.array[this.pointer - 1];
        this.pointer -= 1;
        this.stacklength -= 1;
        return lastval;
    }
    public isEmpty():boolean{
        return this.pointer === 0;
    }
    public print():void{
        let s:string = "";
        for(let i=0; i < this.stacklength; i++){
            s += this.array[i] + ", ";
        }
        console.log(s);
    }

}