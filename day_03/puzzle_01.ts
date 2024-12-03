export const puzzle_01 = async (input: string): Promise<number> => {
  const results = input.matchAll(/mul\((\d+),(\d+)\)/g);

  const pairs = results.map((item) => {
    const num1 = item[1];
    const num2 = item[2];
    return [Number(num1), Number(num2)] as const;
  });

  const sum = pairs.reduce((sum, [num1, num2]) => sum + num1 * num2, 0);
  console.log("SUM:", sum);
  return sum;
};

const input = await Bun.file("day_03/data.txt").text();

console.log(await puzzle_01(input));
