import type { TriQuadrant } from "./puzzle_02";

export const check_diagonal_tl_br = (quadrant: TriQuadrant): number => {
    const letterToCheck = [
        quadrant[0][0],
        quadrant[1][1],
        quadrant[2][2],
    ].join("");
    // console.log("Check Diagonal TL BR: " + letterToCheck);
    if (letterToCheck == "MAS" || letterToCheck == "SAM") {
        return 1;
    } else {

        return 0;
    }
};


export const check_diagonal_tr_bl = (quadrant: TriQuadrant): number => {
    const letterToCheck = [
        quadrant[0][2],
        quadrant[1][1],
        quadrant[2][0],
    ].join("");
    // console.log("Check Diagonal TR BL: " + letterToCheck);

    if (letterToCheck == "MAS" || letterToCheck == "SAM") {
        return 1;
    } else {

        return 0;
    }
};
