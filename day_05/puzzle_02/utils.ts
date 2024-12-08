import type { PageRule, Update } from "./types"

type RuleMap = Record<number, number[] | undefined>

export const getMiddleNumberOfSortedIncorrectlyOrderedUpdate = (rules: PageRule[], update: Update): number | null => {
    if (update.length % 2 !== 1) {
        throw new Error("length of update is not uneven! no middle number exists!" + update)
    }
    const afterMap = getAfterMap(rules)
    const prevMap = getPreviousMap(rules)

    const updateSort = getUpdateSort(afterMap, prevMap)
    const sortedUpdates = update.toSorted(updateSort)
    return getMiddleNumberOfUpdateIfCorrect(rules, sortedUpdates)

}

export const getPreviousMap = (rules: PageRule[]): RuleMap => {
    const map: Record<number, number[] | undefined> = {}
    for (const { prev, next } of rules) {

        if (map[prev] !== undefined) {
            map[prev].push(next)
        } else {
            map[prev] = [next]
        }
    }
    return map
}


export const getAfterMap = (rules: PageRule[]): RuleMap => {
    const map: Record<number, number[] | undefined> = {}
    for (const { prev, next } of rules) {

        if (map[next] !== undefined) {
            map[next].push(prev)
        } else {
            map[next] = [prev]
        }
    }
    return map
}

type UpdateSortFn = (first: number, second: number) => number

const getUpdateSort = (nextMap: RuleMap, previusMap: RuleMap): UpdateSortFn => {
    const sortFn = (first: number, second: number): number => {
        const updatesLater = nextMap[first]
        const updatesBefore = previusMap[first]

        if (updatesLater?.includes(second)) {
            return 1
        } else if (updatesBefore?.includes(second)) {
            return -1
        } else return 0
    }

    return sortFn
}



export const getMiddleNumberOfUpdateIfCorrect = (rules: PageRule[], update: Update): number | null => {
    if (update.length % 2 !== 1) {
        throw new Error("length of update is not uneven! no middle number exists!" + update)
    }
    const afterMap = getAfterMap(rules)
    const prevMap = getPreviousMap(rules)

    let isValid = true
    update.forEach((updateNumber, index) => {
        const updatesBefore = update.slice(0, index)
        const updatesAfter = update.slice(index, -1)

        const wrongUpdatesBefore = updatesAfter.filter(numBefore => afterMap[updateNumber]?.includes(numBefore))
        const wrongUpdatesAfter = updatesBefore.filter(numAfter => prevMap[updateNumber]?.includes(numAfter))
        console.log(`check: ${updateNumber}, wrongBefore: ${wrongUpdatesBefore}, wrongAfter: ${wrongUpdatesAfter}`)
        if (!!wrongUpdatesBefore.length) {

            isValid = false;
        }

        if (!!wrongUpdatesAfter.length) {
            isValid = false;
        }
    })

    if (isValid) {
        const numToReturn = update[Math.floor(update.length / 2)]
        console.log(`Is valid, returning ${numToReturn}`)
        return numToReturn
    } else {
        return null
    }
}