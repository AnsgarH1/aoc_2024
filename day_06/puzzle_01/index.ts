export type PuzzleInput = {
  readonly map: Array<Array<string>>;
};
export const puzzle01 = async ({ map }: PuzzleInput) => {
  /**
   *  Actual Game Loop Methods
   */

  function goForward() {
    switch (currentDirection) {
      case "UP":
        position.y--;
        return;
      case "DOWN":
        position.y++;
        return;
      case "LEFT":
        position.x--;
        return;
      case "RIGHT":
        position.x++;
        return;
    }
  }

  function turnRight() {
    switch (currentDirection) {
      case "UP":
        currentDirection = "RIGHT";
        return;
      case "RIGHT":
        currentDirection = "DOWN";
        return;
      case "DOWN":
        currentDirection = "LEFT";
        return;
      case "LEFT":
        currentDirection = "UP";
        return;
    }
  }

  function nextFieldIsObstacle() {
    let nextField = "";
    switch (currentDirection) {
      case "UP":
        nextField = map[position.y - 1][position.x];
        break;
      case "RIGHT":
        nextField = map[position.y][position.x + 1];
        break;
      case "DOWN":
        nextField = map[position.y + 1][position.x];
        break;
      case "LEFT":
        nextField = map[position.y][position.x - 1];
        break;
    }

    return nextField === "#";
  }

  function nextFieldIsOutsideOfMap() {
    switch (currentDirection) {
      case "UP":
        return position.y === 0;
      case "RIGHT":
        return position.x === map[0].length - 1;
      case "DOWN":
        return position.y === map.length - 1;
      case "LEFT":
        return position.x === 0;
    }
  }

  function printMap() {
    const mapToDisplay = new Array(...map);
    switch (currentDirection) {
      case "UP":
        mapToDisplay[position.y][position.x] = "P";
        break;
      case "RIGHT":
        mapToDisplay[position.y][position.x] = "P";
        break;
      case "DOWN":
        mapToDisplay[position.y][position.x] = "P";
        break;
      case "LEFT":
        mapToDisplay[position.y][position.x] = "P";
        break;
    }

    const mapString = mapToDisplay.map((line) => line.join("")).join("\n");
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(mapString);
  }

  /**
   *  Initialize Game Variables
   */

  let isOutsideOfBounds = false;

  let position = { x: -1, y: -1 };
  let currentDirection: "UP" | "DOWN" | "LEFT" | "RIGHT" = "UP";
  const visitedFields: Array<typeof position> = [];

  /**
   *  Find initial Position
   */

  map.forEach((row, rowIndex) =>
    row.forEach((mapField, columnIndex) => {
      if (mapField === "^") {
        position.x = columnIndex;
        position.y = rowIndex;

        map[rowIndex][columnIndex] = ".";
      }
    }),
  );
  console.log(`Guard found at position x:${position.x} y:${position.y}`);

  /**
   *  Actual Game Loop
   */

  while (!isOutsideOfBounds) {
    if (nextFieldIsObstacle()) {
      turnRight();
      console.log("Going forward is not possible. Turning right.");
    } else {
      console.log("Going forward.");
      goForward();
    }

    console.log(`Current position x:${position.x} y:${position.y}`);
    if (
      !visitedFields.some(
        (field) => field.x === position.x && field.y === position.y,
      )
    ) {
      visitedFields.push({ ...position });
    }

    printMap();

    if (nextFieldIsOutsideOfMap()) {
      isOutsideOfBounds = true;
      console.log("Outside of bounds. Stopping game loop.");
    }
  }
  console.log("Game loop finished.");
  console.log("Visited fields: ", visitedFields.length);
  return visitedFields.length;
};

const input = await Bun.file("./day_06/puzzle_01/data.txt").text();

const map = input.split("\n").map((line) => line.split(""));

const result = await puzzle01({ map });

console.log("result: ", result + 1);
