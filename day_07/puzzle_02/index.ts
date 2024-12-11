const inputText = await Bun.file("./day_07/puzzle_01/data.txt").text();

const input = inputText.split("\n");
const pairs: Array<[number, number[]]> = [];

const POSSIBLE_OPERANDS = ["+", "*", "||"] as const;

input.forEach((line) => {
  const [sumString, numbersString] = line.split(":");
  const sum = parseInt(sumString);
  const numbers = numbersString
    .trim()
    .split(" ")
    .map((numberString) => parseInt(numberString));
  pairs.push([sum, numbers]);
});

let total_sum = 0;
let total_lines = 0;

pairs.forEach(([expexted_sum, numbers], line) => {
  const operands_count_in_line = numbers.length - 1;

  const possible_combinations_for_line = Math.pow(
    POSSIBLE_OPERANDS.length,
    operands_count_in_line,
  );

  let line_resolved = false;

  /**
   * Loop through all possible combinations of operands
   */
  for (
    let combination_in_line = 0;
    combination_in_line < possible_combinations_for_line;
    combination_in_line++
  ) {
    if (line_resolved) {
      break;
    }

    let sum = numbers[0];
    let printString = numbers[0].toString();

    /**
     * Convert the current combination to binary and map it to the possible operands
     */
    const combination_in_line_as_tertiary_str = Number(combination_in_line)
      .toString(POSSIBLE_OPERANDS.length)
      .padStart(operands_count_in_line, "0");
    //console.log(`Checking combination ${combination_in_line_as_tertiary_str}`);

    const operands_of_combination = combination_in_line_as_tertiary_str
      .split("")
      .map((digit) => POSSIBLE_OPERANDS[parseInt(digit)]);

    /**
     * Loop through all operands and calculate the sum based on the current combination
     */
    let last_operation: (typeof POSSIBLE_OPERANDS)[number] = "+";
    let last_number_str = numbers[0].toString();

    for (
      let operation_index_of_combination = 0;
      operation_index_of_combination < operands_count_in_line;
      operation_index_of_combination++
    ) {
      const current_number = numbers[operation_index_of_combination + 1];
      const current_operation =
        operands_of_combination[operation_index_of_combination];

      if (current_operation === "+") {
        sum += current_number;
        printString += current_operation;
        printString += current_number;

        last_number_str = current_number.toString();
      } else if (current_operation === "*") {
        sum *= current_number;
        printString += current_operation;
        printString += current_number;

        last_number_str = current_number.toString();
      } else if (current_operation === "||") {
        printString += current_operation;
        printString += current_number;

        sum = parseInt(sum.toString() + current_number.toString());
      }
      last_operation = current_operation;
    }
    printString += `=${sum}`;
    // console.log(printString);
    if (expexted_sum === sum) {
      total_sum += sum;
      total_lines++;
      //console.log(`line #${line + 1} (${expexted_sum}): ${printString}`);
      line_resolved = true;
    }
  }
});

console.log(total_sum, total_lines);
