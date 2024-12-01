export const puzzle_01 = async () => {
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

  const distance = leftListSorted.reduce((sum, leftListItem, index) => {
    const rightListItem = rightListSorted[index]
    const distance = Math.abs(rightListItem - leftListItem)
    return sum + distance
  }, 0)

  return distance

};



