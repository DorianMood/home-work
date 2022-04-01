function toHex(value) {
  let result = "";
  let number = value;
  while (Math.floor(number / 16)) {
    let reminder = number % 16;
    result =
      String.fromCharCode((reminder % 10) + (reminder > 9 ? 0x61 : 0x30)) +
      result;
    number = Math.floor(number / 16);
  }

  result =
    String.fromCharCode((number % 10) + (number > 9 ? 0x61 : 0x30)) + result;

  return result;
}

toHex(375);

module.exports = toHex;
