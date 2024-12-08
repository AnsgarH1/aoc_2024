import type { Quadrant } from "./puzzle_01";

export const check_horizontal = (
    quadrant: Quadrant,
    isLastLine: boolean,
): number => {
    if (isLastLine) {

        let count = 0;
        for (let i = 0; i < 4; i++) {
            const letterToCheck = [
                quadrant[i][0],
                quadrant[i][1],
                quadrant[i][2],
                quadrant[i][3],
            ].join("");

            //console.log("Check Horizontal (last line): " + letterToCheck);

            if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
                count++;
            }
        }
        return count;
    } else {

        const letterToCheck = [
            quadrant[0][0],
            quadrant[0][1],
            quadrant[0][2],
            quadrant[0][3],
        ].join("");
        //console.log("Check Horizontal: " + letterToCheck)
        if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
            return 1;
        } else {
            return 0;
        }
    }
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

            //console.log("Check Vertical (last line): " + letterToCheck);

            if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
                count++;
            }
        }
        return count;
    } else {
        const letterToCheck = [
            quadrant[0][0],
            quadrant[1][0],
            quadrant[2][0],
            quadrant[3][0],
        ].join("");
        //console.log("Check Vertical: " + letterToCheck)
        if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
            return 1;
        } else {
            return 0;
        }
    }
};

/**
 *  X _ _ _ 
 *  M _ _ _
 *  A _ _ _
 *  S _ _ _ 
 */
export const check_diagonal_tl_br = (quadrant: Quadrant): number => {
    const letterToCheck = [
        quadrant[0][0],
        quadrant[1][1],
        quadrant[2][2],
        quadrant[3][3],
    ].join("");
    //console.log("Check Diagonal TL BR: " + letterToCheck);
    if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
        return 1;
    } else {

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
    //console.log("Check Diagonal TR BL: " + letterToCheck);

    if (letterToCheck == "XMAS" || letterToCheck == "SAMX") {
        return 1;
    } else {

        return 0;
    }
};
