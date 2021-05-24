export const getIntegerNumber = (num) => {
  return Math.floor(num);
};

export const getDecimalNumber = (num, decimals) => {
  const absNum = Math.abs(num);
  return (absNum - Math.floor(absNum)).toFixed(decimals);
};
