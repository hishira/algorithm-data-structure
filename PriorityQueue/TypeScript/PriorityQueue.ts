export interface PriorityQueue<T>{
    insert(element:T):boolean;
    maximum():T;
    extract_max():T;
    increase_key(element:T,priority:number):T
}