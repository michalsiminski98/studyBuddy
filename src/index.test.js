const add = (a, b) => a + b;

it('Adds two values', () => {
  expect(add(2, 4)).not.toBe(7);
  expect(add(2, 3)).toBe(5);
});

const users = ['rom', 'włoch', 'polak'];

it('checks names', () => {
  expect(users).toContain('rom');
  expect(users).not.toContain('polska');
});
