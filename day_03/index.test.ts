import { describe, expect, it, test } from "bun:test";
import { puzzle_01 } from "./puzzle_01";
import { puzzle_02 } from "./puzzle_02";

const sampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

describe("day_03", () => {
  const testMatrixPuzzle01: Record<string, [string, number]> = {
    "aoc sample": [
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
      161,
    ],
  };
  /*
  Object.entries(testMatrixPuzzle01).forEach(
    ([description, [input, expectedValue]]) => {
      it(description, async () => {
        expect(await puzzle_01(input)).toBe(expectedValue);
      });
    },
  );
*/
  const testMatrixPuzzle02: Record<string, [string, number]> = {
    "aoc sample": [
      "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))",
      48,
    ],
    "capture both": [
      "do()ergsergmul(1,1)dbstrbdon't()aemul(10,10)rgserbhdo()ergsergmul(1,1)dbstrbdon't()",
      2,
    ],
    "capture only after do": [
      "ul(1,1)dbstrbdon't()aemul(10,10)rgserbhdo()ergsergmul(1,1)dbstrbdon't()",
      2,
    ],
    "don't capture after don't": ["do()mul(1,1)don't()mul(10,10)", 1],
  };

  Object.entries(testMatrixPuzzle02).forEach(
    ([description, [input, expectedValue]]) => {
      it(description, async () => {
        expect(await puzzle_02(input)).toBe(expectedValue);
      });
    },
  );
});
