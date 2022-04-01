function sum(a, b) {
  return (BigInt(a) + BigInt(b)).toLocaleString("fullwide", {
    useGrouping: false,
  });
}

module.exports = sum;
