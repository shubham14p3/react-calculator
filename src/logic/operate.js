import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  const oneBig = Big(numberOne);
  const twoBig = Big(numberTwo);

  if (operation === "-") {
    return oneBig.minus(twoBig);
  }

  if (operation === "+") {
    return oneBig.plus(twoBig);
  }

  if (operation === "/" && numberTwo) {
    return oneBig.div(twoBig);
  }

  if (operation === "/" && numberTwo === 0) {
    return Infinity;
  }

  if (operation === "X") {
    return oneBig.mul(twoBig);
  }

  return 0;
};

export default operate;
