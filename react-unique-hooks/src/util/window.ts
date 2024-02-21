export type Win = (Window & typeof globalThis) | null;

let win: Win = null;

if (typeof window !== "undefined") {
  win = window;
}

export default win;
