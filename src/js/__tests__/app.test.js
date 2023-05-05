import Character from '../app';

test('check name in character class', () => {
  expect(() => new Character('namenamename')).toThrow();
  expect(() => new Character(123)).toThrow();
});

test('check type in character class', () => {
  expect(() => new Character('name', 'typetypetype')).toThrow();
  expect(() => new Character('name', 123)).toThrow();
});
