export const puzzle_02 = async (input: string): Promise<number> => {
  const lines = input.split("\n");
  const data = lines.map((line) => line.split(" ").map(Number));

  let validReports = 0;

  data.forEach((report, reportIndex) => {
    let angle: "INC" | "DEC" | undefined;

    let previousLevel: number = 0;

    let badLevels = 0;
    let skippedLevels = 0;

    let previouseLevelIsSkipped = false;
    let firstLevelSkipped = false;

    report.forEach((currLevel, levelIndex) => {
      let levelIsBad = false;

      // Check if Level is safe
      if (levelIndex === 0) {
        previousLevel = currLevel;
      } else {
        const currAngle = currLevel - previousLevel;

        // Check if Level is safe
        if (angle === undefined && currAngle > 0) {
          angle = "INC";
        }
        if (angle === undefined && currAngle < 0) {
          angle = "DEC";
        }

        if (currAngle > 0 && angle === "DEC") {
          levelIsBad = true;
        }

        if (currAngle < 0 && angle == "INC") {
          levelIsBad = true;
        }

        if (currAngle === 0) {
          levelIsBad = true;
        }
        if (Math.abs(currAngle) >= 4) {
          levelIsBad = true;
        }

        // If level is bad, but previous level not skipped, we skip this one and don't set it for the next stage
        if (levelIsBad && !previouseLevelIsSkipped) {
          previouseLevelIsSkipped = true;
          skippedLevels++;
          previousLevel;

          // If level is bad, but previous was already skipped, we can't skip again
        } else if (levelIsBad && previouseLevelIsSkipped) {
          badLevels++;

          // reset Levels
          previouseLevelIsSkipped = false;
          previousLevel = currLevel;
        } else {
          // Level is safe, continue and reset
          previousLevel = currLevel;
          previouseLevelIsSkipped = false;
        }
      }
    });

    if (skippedLevels <= 1 && badLevels == 0) {
      validReports++;
      //console.log(`Report #${reportIndex} is safe!`)
    } else {
      //console.log(`Report #${reportIndex} is NOT safe!`)
    }
  });

  return validReports;
};

const data = await Bun.file("day_02/data.txt").text();
console.log(await puzzle_02(data));
