export interface Queue<T>{
    enqueue(element:T):boolean;
    dequeue():T;
    length():number;
    is_Empyt():boolean;
}