// return random whole number from 1 to max

export default (max) => {
  const res = Math.floor(Math.random() * max) + 1;
  return res;
};
