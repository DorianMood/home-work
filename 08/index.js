function sum(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return (a + b).toString();
  } else if (Number.isInteger(b)) {
    b = b.toString();
  } else if (Number.isInteger(a)) {
    a = a.toString();
  }

  if (a.length > b.length) {
    b = "0".repeat(a.length - b.length) + b;
  } else if (a.length < b.length) {
    a = "0".repeat(b.length - a.length) + a;
  }

  let result = "";
  let carry = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = a.charCodeAt(i) - 48 + (b.charCodeAt(i) - 48) + carry;
    result += sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry) result += carry;
  result = result.split("").reverse().join("");

  return result;
}

sum(1, 1);

module.exports = sum;
