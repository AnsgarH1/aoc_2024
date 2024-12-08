import { describe, expect, it } from "bun:test";
import { puzzle01 } from ".";
import { rules, updates } from "./sample";

describe("day_05", () => {
    it("gets returns update 1 correct", () => {

        expect(puzzle01({ orderingRules: rules, updates: updates })).toBe(143)
    })
})