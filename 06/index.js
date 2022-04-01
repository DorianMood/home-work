function getResult(actions) {
  let sequence = actions.map((item) => item[0]).join("");
  let matches = sequence.matchAll(/c*p(c*k)+(c*)p?/g);
  return Array.from(matches).reduce(
    (prev, curr) => prev + Math.floor(curr[2].length / 2),
    0
  );
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

let x = 1;
module.exports = getResult;
