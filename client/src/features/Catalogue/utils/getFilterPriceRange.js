const getFilterPriceRange = async (startPrice, endPrice) => {
  const pricesArray = [];

  for (let i = startPrice; i <= endPrice; i += 1) {
    pricesArray.push(i);
  }

  return pricesArray.join(',');
};

export default getFilterPriceRange;
