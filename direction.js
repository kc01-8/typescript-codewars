function dirReduc(arr){
  const opposite = { 'NORTH': 'SOUTH', 'SOUTH': 'NORTH', 'EAST': 'WEST', 'WEST': 'EAST' };
    const result = [];

    for (const direction of arr) {
        const lastDirection = result.pop();

        if (lastDirection === opposite[direction]) {
            continue;
        }

        result.push(lastDirection, direction);
    }

    return result.filter(Boolean);
}
