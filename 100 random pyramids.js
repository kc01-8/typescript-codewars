function RandomOrientation() {
  return Math.floor(Math.random() * 4);
}

function RandomHeight() {
  return Math.floor(Math.random() * 9) + 1;
}

function printRandomPyramid() {
  for (let j = 0; j < 99; j++){
  const orientation = RandomOrientation();
  const pyramidHeight = RandomHeight();
  const pyramidLeftRight = Math.round(RandomHeight() / 2);

  switch (orientation) {
    case 0: // Print pyramid in normal orientation
      for (let i = 1; i <= pyramidHeight; i++) {
        let spaces = ' '.repeat(pyramidHeight - i);
        let blocks = '*'.repeat(2 * i - 1);
        console.log(spaces + blocks);
      }
      break;

    case 1: // Print pyramid upside down
      for (let i = pyramidHeight; i >= 1; i--) {
        let spaces = ' '.repeat(pyramidHeight - i);
        let blocks = '*'.repeat(2 * i - 1);
        console.log(spaces + blocks);
      }
      break;

    case 2: // Print pyramid rotated 90 degrees to the right
      for (let i = 1; i <= pyramidLeftRight; i++) {
        let blocks = '*'.repeat(i);
        console.log(blocks);
      }
      for (let i = pyramidLeftRight - 1; i >= 1; i--) {
        let blocks = '*'.repeat(i);
        console.log(blocks);
      }
      break;

    case 3: // Print pyramid rotated 90 degrees to the left
      for (let i = 1; i <= pyramidLeftRight; i++) {
        let spaces = ' '.repeat(pyramidLeftRight - i);
        let blocks = '*'.repeat(i);
        console.log(spaces + blocks);
      }
      for (let i = pyramidLeftRight - 1; i >= 1; i--) {
        let spaces = ' '.repeat(pyramidLeftRight - i);
        let blocks = '*'.repeat(i);
        console.log(spaces + blocks);
      }
      break;

    default:
      console.log('Invalid orientation');
  }
      console.log('\n');
  }
}

printRandomPyramid();
