
import { check_diagonal_tl_br, check_diagonal_tr_bl } from "./matchUtils_puzzle2";

const buffer = 3;

export type TriQuadrant = readonly [
  readonly [string, string, string],
  readonly [string, string, string],
  readonly [string, string, string],
];
export const puzzle_01 = (input: string): number => {
  const input_matrix = input.split("\n").map((line) => line.split(""));

  const x_axis_length = input_matrix[0].length;
  const y_axis_length = input_matrix.length;
  // console.log(`y-length: ${y_axis_length}, x-length: ${x_axis_length}`)
  let xmas_count = 0;
  for (let y = 0; y <= y_axis_length - buffer; y++) {
    //console.log(`\n\n------ next line ----------\n    found ${xmas_count} so far\n\n`)
    for (let x = 0; x <= x_axis_length - buffer; x++) {


      const quadrantToCheck = input_matrix
        .slice(y, y + buffer)
        .map((line) => line.slice(x, x + buffer)) as unknown as TriQuadrant;

      //console.log(`\n\nChecking new Quadrant: (x:${x}, y:${y})`)
      //console.log(quadrantToCheck.map(line => line.join(" ")).join("\n"))
      const foundXMAS = check_diagonal_tl_br(quadrantToCheck) * check_diagonal_tr_bl(quadrantToCheck);

      // console.log(`found ${foundXMAS} XMAS`)
      xmas_count = foundXMAS + xmas_count
    }
  }

  return xmas_count;
};

const input = await Bun.file("./day_04/data.txt").text()

const result = puzzle_01(input)

console.log(result)