import { List } from "./list"
export class ArrayList<T> implements List<T>{
    private elements: T[];
    private _length: number;
    constructor() {
        this.elements = [];
        this._length = 0;

    }
    public append(element: T): void {
        this.elements.push(element);
        this._length += 1;
    }

    public print(): void {
        let allelements: string = ""
        for (let i = 0; i < this._length; i++) {
            allelements += String(this.elements[i]) + " "
        }
        console.log(allelements);
    }

    public removeLast(): boolean {
        if (this.elements.length > 0) {
            this.elements.length -= 1
            this._length -= 1;
            return true;
        }
        return false;
    }
    public removeFirst(): boolean {
        for (let i = 0; i < this._length; i++) {
            this.elements[i] = this.elements[i + 1]
        }
        this.elements.length -= 1;
        this._length -= 1
        return true;
    }
    public removeAtPosition(position: number): boolean {
        let is_int: boolean = Math.floor(position) === position
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0) {
            return false;
        } if (position === 0) {
            this.removeFirst();
            return true;
        }
        else if (position === this._length - 1) {
            this.removeLast();
            return true;
        }
        for (let i = position; i < this._length - 1; i++) {
            this.elements[i] = this.elements[i + 1];
        }
        this.elements.length -= 1;
        this._length -= 1;
        return true;
    }
    public isEmpty(): boolean {
        return this._length === 0;
    }
    public length(): number {
        return this._length;
    }
    public getFirstElement(): T | null {
        return this._length === 0 ? null : this.elements[0];
    }
    public getLastElement(): T | null {
        return this._length === 0 ? null : this.elements[this._length - 1];
    }
    public getElementAtPosition(position: number) {
        let is_int: boolean = Math.floor(position) === position
        if (!is_int ||
            (this._length - 1) < position ||
            position < 0 ||
            position >= this._length
        ) {
            return null;
        }
        return this.elements[position]
    }
}