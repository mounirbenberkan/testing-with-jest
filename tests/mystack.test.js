const stack = require('../src/stack');

test('pop removes the top element from the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.pop();
    expect(stack.peek()).toBe(999);
}); 