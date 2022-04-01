function rleDecode(source) {
  if ("0" > source[0] || source[0] > "9") {
    source = "1" + source;
  }
  let numbers = source
    .match(/\d+/g)
    .map((item) => parseInt(item[item.length - 1]));
  let letterGroups = source.match(/[a-zA-Z]+/g);

  return numbers
    .map((number, index) => {
      return letterGroups[index]
        .split("")
        .map((letter) => letter.repeat(number))
        .join("");
    })
    .join("");
}

module.exports = rleDecode;
