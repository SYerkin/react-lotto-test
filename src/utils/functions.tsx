
const generateCardNumbers = (): number[][] => {
  const columns: number[][] = [];
  for (let i = 0; i < 9; i++) {
    const start = i * 10 + 1;
    const columnNumbers = Array.from({ length: 9 }, (_, index) => start + index).filter(
      num => num <= 90
    );
    columns.push(columnNumbers);
  }

  const card = Array(3)
    .fill(null)
    .map(() => Array(9).fill(null));

  for (let row = 0; row < 3; row++) {
    const chosenColumns = new Set();
    while (chosenColumns.size < 5) {
      const randomColumn = Math.floor(Math.random() * 9);
      if (!chosenColumns.has(randomColumn)) {
        chosenColumns.add(randomColumn);
        const columnNumbers = columns[randomColumn];
        const randomNumberIndex = Math.floor(Math.random() * columnNumbers.length);
        const number = columnNumbers.splice(randomNumberIndex, 1)[0];
        card[row][randomColumn] = number;
      }
    }
  }

  return card;
};

export {generateCardNumbers};
