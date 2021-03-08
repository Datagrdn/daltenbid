export const toWei = (eth) => {
  return eth * Math.pow(10, 18);
};

export const toEth = (wei) => {
  return wei / Math.pow(10, 18);
};
