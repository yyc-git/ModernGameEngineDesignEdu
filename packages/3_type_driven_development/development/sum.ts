/* not use lodash, because students not have learn it!
import { flow, curry } from "lodash";
*/

// declare function range(start: number, end: number): Array<number>;
function range(start: number, end: number): Array<number> {
    let arr: Array<number> = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;
}

// type accType = number;
// type valType = number;

// declare function reduce(func: (acc: accType, val: valType) => accType, init: number, arr: Array<number>): number;


// declare function reduce<A, B>(func: (acc: B, val: A) => B, init: B, arr: Array<A>): B;
function reduce<A, B>(func: (acc: B, val: A) => B, init: B, arr: Array<A>): B {
    return arr.reduce(func, init);
}

// declare function sum(start: number, end: number): number;
function sum(start: number, end: number): number {
    let arr = range(start, end);

    return reduce((acc, val) => acc + val, 0, arr);
}

console.log(sum(1, 100));




/*
add:
map
filter
*/

// declare function map();
// declare function filter();