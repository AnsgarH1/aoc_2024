import { describe, expect, it, test } from "bun:test";
import type { PageRule } from "./types";
import { getAfterMap, getMiddleNumberOfUpdateIfCorrect } from "./utils";
import { rules } from "./sample";

describe("day_05 puzzle_01 utils", () => {
    it("generates afterMap correctly", () => {
        const input: PageRule[] = [
            { next: 5, prev: 1 },
            { next: 5, prev: 2 },
            { next: 8, prev: 5 }
        ]

        expect(getAfterMap(input)[5]).toEqual([1, 2,])
    })

    it("checks the first update correctly", () => {
        const update = [75, 47, 61, 53, 29]

        expect(getMiddleNumberOfUpdateIfCorrect(rules, update)).toBe(61)
    })

    it("checks the fourth update as wrong correctly", () => {
        const update = [75, 97, 47, 61, 53]

        expect(getMiddleNumberOfUpdateIfCorrect(rules, update)).toBe(null)
    })


})