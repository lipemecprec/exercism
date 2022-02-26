// @ts-check

function arrToInt(array) {
  var integer = 0;
  array.forEach(element => {
    integer *= 10;
    integer += element;
  });
  console.log(integer);
  return integer;
}

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return arrToInt(array1) + arrToInt(array2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const numStr = value.toString();
  var rightChar = numStr.length - 1;
  for (var leftChar = 0; leftChar < rightChar; leftChar++) {
    (numStr[leftChar] == numStr[rightChar]) ? rightChar-- : rightChar = -1;
  }
  return (rightChar != -1)
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (parseInt(input) && isFinite(input)) {
    return '';
  } else if (!input) {
    return 'Required field';
  } else {
    return 'Must be a number besides 0';
  }
}
