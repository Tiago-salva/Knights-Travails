function calculateMoves(x, y) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const neighbors = [];

  for (const [dx, dy] of moves) {
    const newX = dx + x;
    const newY = dy + y;
    if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
      neighbors.push([newX, newY]);
    }
  }

  return neighbors;
}

function knightMoves(initialPosition, finalPosition) {
  const visited = new Set();
  const queue = [[initialPosition, [initialPosition]]];

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    console.log(path);

    if (current[0] === finalPosition[0] && current[1] === finalPosition[1]) {
      console.log(`Path: ${JSON.stringify(path)}`);
      return path;
    }

    visited.add(current.toString());

    const possibleMoves = calculateMoves(...current);

    for (const move of possibleMoves) {
      if (!visited.has(move.toString())) {
        queue.push([move, [...path, move]]);
      }
    }
  }

  console.log("No path found.");
  return null;
}

knightMoves([3, 3], [4, 3]);
