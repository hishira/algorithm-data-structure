export interface Stack<T>{
    push(element:T):boolean;
    peek():T;
    pop():T;
    isEmpty():boolean;
}