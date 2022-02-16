const priceFormatted = (value) => {
  value.toString();
  let price = value.toString().replace(/,/, '');
  return parseFloat(price);
};

module.exports = {
  priceFormatted,
};
