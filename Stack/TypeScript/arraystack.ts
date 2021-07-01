import {Stack} from "./stack";

export class ArrayStack<T> {
    private array: T[];
    constructor(stacksize:number){
        let is_Int:boolean = Math.floor(stacksize) === stacksize;
        if(stacksize <= 0){
            this.array = new Array<T>(10);
        }
        if (!is_Int){
            this.array = new Array<T>(Math.floor(stacksize));
        }else {
            this.array = new Array<T>(stacksize)
        }
    }
    public getArray():T[]{
        return this.array;
    }

}