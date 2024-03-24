"use client";

import { useState } from "react";

export type ArrayHook<T> = {
    a: T[];
    arr: T[];
    array: T[];
    push: (...items: T[]) => number;
    pop: () => T | undefined;
    shift: () => T | undefined;
    set: React.Dispatch<React.SetStateAction<T[]>>;
    filter: (
        callback: (element: T, index: number, array: T[]) => boolean
    ) => T[];
    update: (index: number, newElement: T) => void;
    remove: (index: number) => void;
    clear: () => void;
    find: (
        callback: (element: T, index: number, array: T[]) => boolean
    ) => T | undefined;
    findIndex: (
        callback: (element: T, index: number, array: T[]) => boolean
    ) => number;
    replace: React.Dispatch<React.SetStateAction<T[]>>;
};

/**
 * Makes Array state management easy.
 *
 * @param defaultValue Initial state of the array.
 *
 * @returns An object of array operators.
 *
 * @example
 * // with initial state
 * const arr = useArray(["item 1", "item 2"]);
 *
 * // with empty array
 * const empty = useArray();
 * const empty = useArray([]);
 *
 * @see https://docs.devflikr.com/packages/react-unique-hooks/useArray
 */
export default function useArray<T>(defaultValue: T[] = []): ArrayHook<T> {
    const [array, setArray] = useState<T[]>(defaultValue);

    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param items New elements to add to the array.
     * @see https://docs.devflikr.com/packages/react-unique-hooks/useArray#push
     */
    function push(...items: T[]): number {
        const a = [...array];
        a.push(...items);
        setArray(a);
        return a.length;
    }

    /**
     * Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
     * @see https://docs.devflikr.com/packages/react-unique-hooks/useArray#pop
     */
    function pop() {
        const a = [...array];
        const p = a.pop();
        setArray(a);
        return p;
    }

    /**
     * Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
     * @see https://docs.devflikr.com/packages/react-unique-hooks/useArray#shift
     */
    function shift() {
        const a = [...array];
        const s = a.shift();
        setArray(a);
        return s;
    }

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @see https://docs.devflikr.com/packages/react-unique-hooks/useArray#filter
     */
    function filter(
        callback: (element: T, index: number, array: T[]) => boolean
    ) {
        const a = array.filter(callback);
        setArray(a);
        return a;
    }


    function update(index: number, newElement: T | ((item:T) => T)) {
        const element =
            typeof newElement === "function"
                ? newElement(array[index])
                : newElement;
        const a = [
            ...array.slice(0, index),
            element,
            ...array.slice(index + 1, array.length),
        ];
        setArray(a);
        return a;
    }

    function remove(index: number) {
        setArray((a) => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length),
        ]);
    }

    function clear() {
        setArray([]);
    }

    function find(
        callback: (element: T, index: number, array: T[]) => boolean
    ) {
        return array.find(callback);
    }

    function findIndex(
        callback: (element: T, index: number, array: T[]) => boolean
    ) {
        return array.findIndex(callback);
    }

    return {
        a: array,
        arr: array,
        array,
        push,
        pop,
        shift,
        set: setArray,
        filter,
        update,
        remove,
        clear,
        find,
        findIndex,
        replace: setArray,
    } as const;
}
