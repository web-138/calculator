exports.calculate = function(expression) {
    return calculatePrefix(expression);
  }
  
  function calculatePrefix(expression) {
    const tokens = expression.trim().split(/\s+/).reverse();
  
    const stack = [];
  
    for (let token of tokens) {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        const a = stack.pop();
        const b = stack.pop();
  
        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '*':
            stack.push(a * b);
            break;
          case '/':
            stack.push(a / b);
            break;
          default:
            throw new Error(`Unknown operator: ${token}`);
        }
      }
    }
  
    return stack.pop();
  }
  