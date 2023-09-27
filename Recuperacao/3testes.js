/*3a) Escreva uma possível função contarCaracteres (str) que atenda a esse teste. 
Use a linguagem que estiver mais habituado.*/

function contarCaracteres(str) {
    return str.length;
  }



//Escreva pelo menos 1 outro teste unitário para a função contarCaracteres (str)

// Teste para uma string vazia
test("verificarContagemDeCaracteres para string vazia", () => {
  const resultado = contarCaracteres("");
  expect(resultado).toBe(0);
});

// Teste para uma string com espaços em branco
test("verificarContagemDeCaracteres para string com espaços em branco", () => {
  const resultado = contarCaracteres("  Hello, World!  ");
  expect(resultado).toBe(15);
});

// Teste para uma string com caracteres especiais
test("verificarContagemDeCaracteres para string com caracteres especiais", () => {
  const resultado = contarCaracteres("123!@#$%^&*()_+");
  expect(resultado).toBe(14);
});
