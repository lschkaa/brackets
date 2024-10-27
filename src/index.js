module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = new Map(bracketsConfig);
  const openBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closeBrackets = new Set(bracketsConfig.map(pair => pair[1]));

  for (const char of str) {
    if (openBrackets.has(char)) {
      if (closeBrackets.has(char) && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closeBrackets.has(char)) {
      if (stack.length === 0 || bracketsMap.get(stack.pop()) !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};