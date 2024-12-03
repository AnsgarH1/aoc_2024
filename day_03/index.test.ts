import { describe, expect, it, test } from "bun:test";
import { puzzle_01 } from "./puzzle_01";

const sampleInput = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

describe("day_03", () => {
  const testMatrixPuzzle01: Record<string, [string, number]> = {
    "aoc sample": [
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
      161,
    ],
  };

  Object.entries(testMatrixPuzzle01).forEach(
    ([description, [input, expectedValue]]) => {
      it(description, async () => {
        expect(await puzzle_01(input)).toBe(expectedValue);
      });
    },
  );

  const testMatrixPuzzle02: Record<string, [string, number]> = {
    "aoc sample": [
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
      48,
    ],
  };

  Object.entries(testMatrixPuzzle01).forEach(
    ([description, [input, expectedValue]]) => {
      it(description, async () => {
        expect(await puzzle_02(input)).toBe(expectedValue);
      });
    },
  );
});
