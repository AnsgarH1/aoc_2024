import type { PageRule } from "./types"

const input = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13`

export const rules: PageRule[] = input
    .split("\n")
    .map(rule => {
        const pages = rule.split("|").map(Number)
        return ({ prev: pages[0], next: pages[1] })
    })

const updatesInput = `75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`

export const updates = updatesInput.split("\n").map(line => line.split(",").map(Number))