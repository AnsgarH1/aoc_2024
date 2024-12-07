const buffer = 4;

export type Quadrant = readonly [
  readonly [string, string, string, string],
  readonly [string, string, string, string],
  readonly [string, string, string, string],
  readonly [string, string, string, string],
];
export const puzzle_01 = (input: string): number => {
  const input_matrix = input.split("\n").map((line) => line.split(""));

  const x_axis_length = input_matrix[0].length;
  const y_axis_length = input_matrix.length;
  let xmas_count = 0;
  for (let y = 0; y < y_axis_length - buffer; y++) {
    for (let x = 0; x < x_axis_length - buffer; x++) {
      const isLastQuadrant =
        y === y_axis_length - buffer && x === x_axis_length - buffer;
      const quadrantToCheck = input_matrix
        .slice(x, x + buffer)
        .map((line) => line.slice(y, y + buffer)) as unknown as Quadrant;

      xmas_count +=
        check_horizontal(quadrantToCheck, isLastQuadrant) +
        check_vertical(quadrantToCheck, isLastQuadrant) +
        check_diagonal_tl_br(quadrantToCheck) +
        check_diagonal_tr_bl(quadrantToCheck);
    }
  }

  return xmas_count;
};

/*
const input = await Bun.file("day_03/data.txt").text();

console.log(await puzzle_01(input));
*/

/**
 * X M A S
 * _ _ _ _
 * X M A S
 * _ _ _ _
 */

/**
 * _ _ _ _
 * X M A S
 * _ _ _ _
 * _ _ _ _
 */

export const check_horizontal = (
  quadrant: Quadrant,
  isLastLine: boolean,
): number => {
  const countAllLines = quadrant.reduce((sum, line) => {
    if (line.join("").includes("XMAS") || line.join("").includes("SAMX")) {
      return sum + 1;
    } else return sum;
  }, 0);

  const firstLineIncludesXMAS = quadrant[0].join("").includes("XMAS");
  const firstLineIncludesSAMX = quadrant[0].join("").includes("SAMX");

  if (isLastLine) {
    return countAllLines;
  } else if (firstLineIncludesSAMX || firstLineIncludesXMAS) {
    return 1;
  } else return 0;
};

export const check_vertical = (
  quadrant: Quadrant,
  isLastLine: boolean,
): number => {
  if (isLastLine) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      const letterToCheck = [
        quadrant[0][i],
        quadrant[1][i],
        quadrant[2][i],
        quadrant[3][i],
      ].join("");

      if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
        count++;
      } else {
        console.log("Check: " + letterToCheck + " did not match XMAS or SAMX");
      }
    }
    return count;
  } else {
    const letterToCheck = [
      quadrant[0][0],
      quadrant[1][1],
      quadrant[2][2],
      quadrant[3][3],
    ].join();

    if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
      return 1;
    } else {
      return 0;
    }
  }
};

/**
 * X _ _ _
 * _ M _ _
 * _ _ A _
 * _ _ _ S
 */
export const check_diagonal_tl_br = (quadrant: Quadrant): number => {
  const letterToCheck = [
    quadrant[0][0],
    quadrant[1][1],
    quadrant[2][2],
    quadrant[3][3],
  ].join("");

  if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
    return 1;
  } else {
    console.log("Check: " + letterToCheck + " did not match XMAS or SAMX");
    return 0;
  }
};

/**
 * _ _ _ X
 * _ _ M _
 * _ A _ _
 * S _ _ _
 */
export const check_diagonal_tr_bl = (quadrant: Quadrant): number => {
  const letterToCheck = [
    quadrant[0][3],
    quadrant[1][2],
    quadrant[2][1],
    quadrant[3][0],
  ].join("");

  if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
    return 1;
  } else {
    console.log("Check: " + letterToCheck + " did not match XMAS or SAMX");

    return 0;
  }
};

const quadrant: Quadrant = [
  ["X", "M", "A", "S"],
  ["_", "_", "_", "_"],
  ["S", "A", "M", "X"],
  ["_", "_", "_", "_"],
];

check_horizontal(quadrant, false);
