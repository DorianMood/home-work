function getResult(actions) {
  let position = 0;
  let clicksSum = 0;

  while (position < actions.length) {
    // click*
    while (actions[position] === "click") {
      position++;
    }
    if (position >= actions.length) {
      break;
    }

    // power
    if (actions[position] === "power") {
      position++;
    } else {
      throw `click* power sequence should be provided, got: click* ${actions[position]}`;
    }
    if (position >= actions.length) {
      break;
    }

    // click* keyboard
    while (actions[position] === "click") {
      position++;
    }
    if (position >= actions.length) {
      break;
    }
    if (actions[position] === "keystrokes") {
      position++;
    }
    if (position >= actions.length) {
      break;
    }
    if (position >= actions.length) {
      break;
    }

    let clicks = 0;
    // click*
    while (actions[position] === "click") {
      position++;
      clicks++;
    }
    if (actions[position] === "keystrokes") {
      position++;
      clicks = 0;
      while (actions[position] === "click") {
        position++;
        clicks++;
      }
    }
    clicksSum += Math.floor(clicks / 2);

    if (position >= actions.length) {
      break;
    }

    // power
    if (actions[position] === "power") {
      position++;
    } else {
      throw `click* power sequence should be provided, got: click* ${actions[position]}`;
    }
  }

  return clicksSum;
}

let r = getResult([
  "power",
  "keystrokes",
  "click",
  "click",
  "click",
  "click",
  "click",
  "power",
  "click",
  "click",
  "power",
  "keystrokes",
  "click",
  "click",
  "click",
]);

module.exports = getResult;
