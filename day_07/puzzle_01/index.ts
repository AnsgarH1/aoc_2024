const inputText = await Bun.file("./day_07/puzzle_01/data.txt").text();

const input = inputText.split("\n");
const pairs: Array<[number, number[]]> = [];

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
  const operands_count = numbers.length - 1;
  const possible_operands = ["+", "*"];

  const possible_combinations = Math.pow(
    possible_operands.length,
    operands_count,
  );

  let line_resolved = false;
  for (let i = 0; i < possible_combinations; i++) {
    if (line_resolved) {
      break;
    }

    let sum = numbers[0];
    let printString = numbers[0].toString();

    const i_bin = Number(i).toString(2).padStart(operands_count, "0");
    const operands = i_bin
      .split("")
      .map((digit) => possible_operands[parseInt(digit)]);

    for (let j = 0; j < operands_count; j++) {
      const current_number = numbers[j + 1];
      printString += operands[j];
      printString += current_number;

      if (operands[j] === "+") {
        sum += current_number;
      } else {
        sum *= current_number;
      }
    }
    printString += `=${sum}`;

    if (expexted_sum === sum) {
      total_sum += sum;
      total_lines++;
      console.log(`line #${line + 1} (${expexted_sum}): ${printString}`);
      line_resolved = true;
    }
  }
});

console.log(total_sum, total_lines);
