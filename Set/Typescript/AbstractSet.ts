export interface AbstractSet<T>{
    add(element: T): boolean;
    remove(elementtoremove: T): boolean;   
}