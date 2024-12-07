import { describe, expect, it, test } from "bun:test";
import { puzzle_01 } from "./puzzle_01";
import { puzzle_02 } from "./puzzle_02";

describe("day_04", () => {
  const testMatrixPuzzle01: Record<string, [string, number]> = {
    "aoc sample": [
      `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`,
      161,
    ],
    "finds XMAS": ["XMAS", 1],
    "finds reverse XMAS": ["SAMX", 1],
    "finds top-down XMAS": [
      `.X.
.M.
.A.
.S.     
      `,
      1,
    ],
    "finds down-up XMAS": [
      `.S.
.A.
.M.
.X.     
      `,
      1,
    ],
    "finds top down and left right values": [
      `XMAS
Masd
Aasd
Sasd`,
      2,
    ],
    "it finds cross diagonal XMAS": [
      `X___
_M__
__A_
___S`,
      1,
    ],
    "finds cross diagonal other direction": [
      `___X
__M_
_A__
S___
`,
      1,
    ],
    "finds cross diagonal SAMX": [
      `___S
__A_
_M__
X___
`,
      1,
    ],
    "finds cross diagonal other direction SAMX": [
      `S___
_A__
__M_
___X
`,
      1,
    ],
  };

  Object.entries(testMatrixPuzzle01).forEach(
    ([description, [input, expectedValue]]) => {
      it(description, async () => {
        expect(await puzzle_01(input)).toBe(expectedValue);
      });
    },
  );
});
