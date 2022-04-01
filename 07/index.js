function rgb(r, g, b) {
  return [r, g, b]
    .map((item) => parseInt(item) || 0)
    .map((number) => (number < 0 ? 0 : number > 255 ? 255 : number))
    .map((number) => number.toString(16))
    .map((string) => (string.length === 2 ? string : `0${string}`))
    .join("")
    .toUpperCase();
}

module.exports = rgb;
