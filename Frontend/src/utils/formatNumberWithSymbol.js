const formatNumberWithSymbol = (num, symbol = "_") => {
  let numStr = num.toString();
  let reversedDigits = numStr.split("").reverse(); // Reverse digits
  let formattedChunks = [];
  const TOTAL_CHUNKS_PLUS_ONE = Math.ceil(reversedDigits.length / 3); // Number of 3-digit groups
  for (let i = 0; i < TOTAL_CHUNKS_PLUS_ONE; i++) {
    if (i + 1 !== TOTAL_CHUNKS_PLUS_ONE)
      formattedChunks = formattedChunks.concat(
        reversedDigits.slice(i * 3, (i + 1) * 3).concat(symbol),
      );
    else
      formattedChunks = formattedChunks.concat(
        reversedDigits.slice(i * 3, (i + 1) * 3),
      );
  }
  return formattedChunks.reverse().join("");
};
export default formatNumberWithSymbol;
