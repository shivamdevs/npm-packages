"use client";

import { useState } from "react";

export type ArrayHook<T> = {
  array: T[];
  set: React.Dispatch<React.SetStateAction<T[]>>;
  push: (element: T) => void;
  filter: (
    callback: (element: T, index: number, array: T[]) => boolean
  ) => void;
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

export default function useArray<T>(defaultValue: T[] = []): ArrayHook<T> {
  const [array, setArray] = useState<T[]>(defaultValue);

  function push(element: T) {
    setArray((a) => [...a, element]);
  }

  function filter(
    callback: (element: T, index: number, array: T[]) => boolean
  ) {
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index: number) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  function find(callback: (element: T, index: number, array: T[]) => boolean) {
    return array.find(callback);
  }

  function findIndex(
    callback: (element: T, index: number, array: T[]) => boolean
  ) {
    return array.findIndex(callback);
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
    find,
    findIndex,
    replace: setArray,
  };
}
