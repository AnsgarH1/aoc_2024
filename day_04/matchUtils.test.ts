import { describe, expect, it, test } from "bun:test";
import {
  check_diagonal_tl_br,
  check_diagonal_tr_bl,
  check_horizontal,
  check_vertical,
} from "./matchUtils"

import type { Quadrant } from "./puzzle_01";
describe("Check Horizontal", () => {
  it("should count all horizontal occurrences of XMAS or SAMX", () => {
    const quadrant: Quadrant = [
      ["X", "M", "A", "S"],
      ["_", "_", "_", "_"],
      ["S", "A", "M", "X"],
      ["_", "_", "_", "_"],
    ];

    expect(check_horizontal(quadrant, true)).toBe(2); // Two matches
  });

  it("should detect XMAS or SAMX in the first line only if not last line", () => {
    const quadrant: Quadrant = [
      ["X", "M", "A", "S"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["X", "M", "A", "S"],
    ];

    expect(check_horizontal(quadrant, false)).toBe(1); // Match in the first line
  });

  it("should return 0 if no match is found", () => {
    const quadrant: Quadrant = [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
    ];

    expect(check_horizontal(quadrant, true)).toBe(0); // No matches
  });
});

describe("Check Vertical", () => {
  it("should count all vertical occurrences of XMAS or SAMX when isLastLine is true", () => {
    const quadrant: Quadrant = [
      ["X", "_", "S", "_"],
      ["M", "_", "A", "_"],
      ["A", "_", "M", "_"],
      ["S", "_", "X", "_"],
    ];

    expect(check_vertical(quadrant, true)).toBe(2); // One vertical match
  });

  it("should detect vertical matches when isLastLine is false", () => {
    const quadrant: Quadrant = [
      ["X", "_", "_", "_"],
      ["M", "M", "_", "_"],
      ["A", "_", "A", "_"],
      ["S", "_", "_", "S"],
    ];

    expect(check_vertical(quadrant, false)).toBe(1); // Diagonal match
  });

  it("should detect vertical matches when isLastLine is true", () => {
    const quadrant: Quadrant = [
      ["X", "_", "_", "S"],
      ["M", "M", "_", "A"],
      ["A", "_", "A", "M"],
      ["S", "_", "_", "X"],
    ];

    expect(check_vertical(quadrant, true)).toBe(2); // Diagonal match
  });

  it("should return 0 if no match is found", () => {
    const quadrant: Quadrant = [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
    ];

    expect(check_vertical(quadrant, true)).toBe(0); // No matches
  });
});

describe("Check Diagonal Top-Left to Bottom-Right", () => {
  it("should detect XMAS diagonally from top-left to bottom-right", () => {
    const quadrant: Quadrant = [
      ["X", "_", "_", "_"],
      ["_", "M", "_", "_"],
      ["_", "_", "A", "_"],
      ["_", "_", "_", "S"],
    ];

    expect(check_diagonal_tl_br(quadrant)).toBe(1); // One diagonal match
  });

  it("should detect SAMX diagonally from top-left to bottom-right", () => {
    const quadrant: Quadrant = [
      ["S", "_", "_", "_"],
      ["_", "A", "_", "_"],
      ["_", "_", "M", "_"],
      ["_", "_", "_", "X"],
    ];

    expect(check_diagonal_tl_br(quadrant)).toBe(1); // One diagonal match
  });

  it("should return 0 if no diagonal match is found", () => {
    const quadrant: Quadrant = [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
    ];

    expect(check_diagonal_tl_br(quadrant)).toBe(0); // No matches
  });
});

describe("Check Diagonal Top-Right to Bottom-Left", () => {
  it("should detect XMAS diagonally from top-right to bottom-left", () => {
    const quadrant: Quadrant = [
      ["_", "_", "_", "X"],
      ["_", "_", "M", "_"],
      ["_", "A", "_", "_"],
      ["S", "_", "_", "_"],
    ];

    expect(check_diagonal_tr_bl(quadrant)).toBe(1); // One diagonal match
  });

  it("should detect SAMX diagonally from top-right to bottom-left", () => {
    const quadrant: Quadrant = [
      ["_", "_", "_", "S"],
      ["_", "_", "A", "_"],
      ["_", "M", "_", "_"],
      ["X", "_", "_", "_"],
    ];

    expect(check_diagonal_tr_bl(quadrant)).toBe(1); // One diagonal match
  });

  it("should return 0 if no diagonal match is found", () => {
    const quadrant: Quadrant = [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
      ["_", "_", "_", "_"],
    ];

    expect(check_diagonal_tr_bl(quadrant)).toBe(0); // No matches
  });
});
