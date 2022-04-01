function rle(source) {
  let counter = 1;
  let result = "";
  for (let i = 1; i < source.length; i++) {
    if (source[i] !== source[i - 1]) {
      result += counter === 1 ? source[i - 1] : `${source[i - 1]}${counter}`;
      counter = 1;
    } else {
      counter++;
    }
  }

  result +=
    counter === 1
      ? source[source.length - 1]
      : `${source[source.length - 1]}${counter}`;

  return result;
}

rle("AAABBBCCC");

module.exports = rle;
