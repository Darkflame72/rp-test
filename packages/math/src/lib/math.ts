import { isEven } from "@yicchi/is-even";
import { isOdd } from "@yicchi/is-odd";
// stuff
export const right = (n: number) => isOdd(n) ? n + 1 : isEven(n) ? n + 2 : n + 3;
