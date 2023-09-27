// Importe a função que será testada
const string_invert = require('./caminho/do/seu/arquivo/string_invert.js');

// Teste para strings vazias
test('Inverter uma string vazia deve retornar uma string vazia', () => {
  expect(string_invert('')).toBe('');
});

// Teste para strings com um único caractere
test('Inverter uma string com um único caractere deve retornar a mesma string', () => {
  expect(string_invert('a')).toBe('a');
  expect(string_invert('1')).toBe('1');
});

// Teste para strings com mais de um caractere
test('Inverter uma string com mais de um caractere deve retornar a string invertida', () => {
  expect(string_invert('abcdefg')).toBe('gfedcba');
  expect(string_invert('12345')).toBe('54321');
});
