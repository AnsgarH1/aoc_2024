import { describe, expect, test } from "bun:test";
import { puzzle_01 } from "./puzzle_01";
import { puzzle_02 } from "./puzzle_02";

describe("day_02", () => {
  test("puzzle 1", async () => {
    expect(await puzzle_01()).toBe(2);
  })

  /*test("puzzle 2", async () => {
    expect(await puzzle_02()).toBe(31);
  })*/
});
