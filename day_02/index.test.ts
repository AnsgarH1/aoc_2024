import { describe, expect, test } from "bun:test";
import { puzzle_01 } from "./puzzle_01";
import { puzzle_02 } from "./puzzle_02";

const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

describe("day_02", () => {
  /*test("puzzle 1", async () => {
    expect(await puzzle_01()).toBe(2);
  })
*/
  test("sample input", async () => {
    expect(await puzzle_02(sampleInput)).toBe(4);
  })

  


  const testMatrix: Record<string, [string, number]> = {
    "asc: one to high": ["1 2 3 8 4", 1],
    "asc: two to high": ["1 2 3 8 4 5 10 6", 0],
    "asc: one to low": ["1 2 3 4 0 5 6", 1],
    "asc: two to low": ["1 0 3 4 0 5 6", 0],
    "asc: one even": ["1 2 3 3 4 5", 1],
    "asc: two even": ["1 2 3 3 4 5 5", 0],
    "asc: two in a row even": ["1 2 3 3 3 5", 0],
    "asc: first one should skip": ["10 1 2 3 4", 1],
    "asc: last one should skip": ["1 2 3 4 10", 1],
    "desc: one to low": ["5 4 0 2 1", 1],
    "desc: two to low": ["10 3 8 7 1 5 4", 0],
    "desc: one to high": ["10 9 8 9 6 5 4 ", 1],
    "desc: two to high": ["10 9 10 7 6 8 4", 0],
    "desc: one even": ["10 9 9 7 6 5 4 3 2 ", 1],
    "desc: two even": ["10 9 8 7 7 6 5 5 4", 0],
    "desc: two in a row even": ["10 9 8 8 8 7 6 5", 0],
    "desc: first one should skip": ["1 10 9 8 7 6", 1],
    "desc: last one should skip": ["10 9 8 7 5 3 9", 1],
  } as const;


  Object.entries(testMatrix).forEach(([testDescription, assertions])=>test(testDescription,async()=>{
    const [input, expectedValue] = assertions
    expect(await puzzle_02(input)).toBe(expectedValue)
  }))




});
