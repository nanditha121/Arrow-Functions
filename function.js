// Regular function declaration with default values
function regularFunction(param1 = 1, param2 = 2) {
    return param1 + param2;
  }
  
  // Function expression
  const expressionFunction = function(param1, param2 = 2) {
    return param1 + param2;
  };
  
  // Arrow function with implicit return and default values
  const arrowFunction = (param1 = 1, param2 = 2) => param1 + param2;
  
  // Arrow function with multiple parameters and explicit return
  const complexArrowFunction = (param1, param2) => {
    const result = param1 * param2;
    return result;
  };
  
  // Function with rest parameter
  function functionWithRestParameter(param1, ...restParams) {
    const sumOfRestParams = restParams.reduce((acc, val) => acc + val, 0);
    return param1 + sumOfRestParams;
  }
  
  // Function signature using JSDoc
  /**
   * Calculates the power of a number.
   * @param {number} base - The base number.
   * @param {number} exponent - The exponent.
   * @returns {number} The result of base raised to the power of exponent.
   */
  function power(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // Example usage of the functions
  console.log(regularFunction());                      // Output: 3
  console.log(expressionFunction(2));                  // Output: 4
  console.log(arrowFunction(undefined, 3));           // Output: 4
  console.log(complexArrowFunction(3, 4));             // Output: 12
  console.log(functionWithRestParameter(1, 2, 3, 4)); // Output: 10
  console.log(power(2, 3));                            // Output: 8
  