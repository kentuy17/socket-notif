const pineTree = (height) => {
  let stem = '';
  for (let index = 0; index <= height; index++) {
    let pads = ' '.repeat(height - index);
    let layer = '*'.repeat(index * 2 + 1);

    if (index === 0) {
      stem = pads + layer;
    }
    if (index === height) {
      console.log(stem);
    } else {
      console.log(pads + layer);
    }
  }
};

pineTree(3);
pineTree(4);

// |   *
// |  ***
// | *****
