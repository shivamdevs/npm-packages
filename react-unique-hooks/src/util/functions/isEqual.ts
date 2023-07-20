export default function isEqual(a: any, b: any) {

    if (a === b) {
        return true;
    }

    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return false;
    }

    const keysA: string[] = Object.keys(a);
    const keysB: string[] = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (!keysB.includes(key)) {
            return false;
        }
        if (!isEqual(a[key], b[key])) {
            return false;
        }
    }

    return true;
}
