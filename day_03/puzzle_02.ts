export const puzzle_02 = async (input: string): Promise<number> => {
  const results = input.matchAll(
    /(?<=do\(\)).*mul\((\d+),(\d+)\).*(?=don't\(\))/g,
  );

  for (const item of results) {
    console.log(item);
  }
  /*
  const sum = pairs.reduce((sum, [num1, num2]) => sum + num1 * num2, 0);

  return sum;*/
};

//const input = await Bun.file("day_03/data.txt").text();
const input =
  "asdasdo()asdfasdmul(2,2)sdfdasfdon't()wedwemul(3,3)do()mul(4,4)don't()asdasd";
console.log(await puzzle_02(input));

/**
 *
 * (?=do\(\)).*(mul\((\d+,\d+)\))(?!:do_not(do_not()))
 */
