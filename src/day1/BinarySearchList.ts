export default function bs_list(haystack: number[], needle: number): boolean {

    let l = 0;
    let r = haystack.length;

    do {
        const m = Math.floor(l + (r - l) / 2);

        if (haystack[m] == needle) {
            return true;
        } else if (haystack[m] > needle) {
            r = m;
        } else {
            l = m + 1
        }
    } while (l < r);

    return false
}
