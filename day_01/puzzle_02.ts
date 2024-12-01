export const puzzle_02 = async () => {
  const input = await Bun.file("day_01/sample.txt").text();
  const pairs = input
    .split("\n")
    .slice(0, -1)
    .map(line => line
      .split("   ")
      .map(Number)
    )

  const leftListSorted = pairs.map(pair => pair[0]).sort()
  const rightListSorted = pairs.map(pair => pair[1]).sort()

  const rightListMap: Record<number, number | undefined> = {}

  rightListSorted.forEach(currNumber => {
    const currentCount = rightListMap[currNumber]

    if (currentCount) {
      rightListMap[currNumber] = currentCount + 1
    } else {
      rightListMap[currNumber] = 1
    }
  })

  const distance = leftListSorted.reduce((sum, leftListItem) => {
    const rightListCount = rightListMap[leftListItem]

    const distance = leftListItem * (rightListCount ?? 0)
    return sum + distance
  }, 0)

  return distance

};



