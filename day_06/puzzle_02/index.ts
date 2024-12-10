import type { PageRule, Update } from "./types"
import { getMiddleNumberOfSortedIncorrectlyOrderedUpdate, getMiddleNumberOfUpdateIfCorrect } from "./utils"


export type PuzzleInput = {
    orderingRules: PageRule[],
    updates: Array<Update>
}
export const puzzle01 = ({ orderingRules, updates }: PuzzleInput) => {
    const middleNumbers = updates.map(update => {
        const middleNumber = getMiddleNumberOfUpdateIfCorrect(orderingRules, update)

        if (middleNumber === null) {
            return getMiddleNumberOfSortedIncorrectlyOrderedUpdate(orderingRules, update)
        } else return null
    }).filter(num => num !== null)

    console.log(`Valid middle numbers: [${middleNumbers}]`,)

    const sum = middleNumbers.reduce((sum, next) => sum + next, 0)

    return sum
}
const rules_input = await Bun
    .file("./day_05/puzzle_01/data_rules.txt")
    .text()

const rules = rules_input
    .split("\n")
    .map(rule => {
        const pages = rule.split("|").map(Number)
        return ({ prev: pages[0], next: pages[1] })
    })

const updates_input = await Bun
    .file("./day_05/puzzle_01/data_updates.txt")
    .text()

const updates = updates_input
    .split("\n")
    .map(line => line.split(",").map(Number))

const result = puzzle01({ orderingRules: rules, updates: updates })

console.log("result: ", result)