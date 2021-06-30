export interface List<T> {
    append(value: T): void;
    print(): void;
    removeLast(): boolean;
    removeFirst(): boolean;
    removeAtPosition(position: number): boolean;
    isEmpty(): boolean;
    length(): number;
    getFirstElement(): T | null;
    getLastElement(): T | null;
    getElementAtPosition(position: number): T | null;
}