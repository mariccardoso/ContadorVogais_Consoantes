//Atividade: Contador de Vogais, consoantes e espaços de um texto.
//Aula - 19/03/2024

//Declarar um array "vogais" e os "consoantes" com seus respectivos elemntos: vogais e consoantes
let vogais = ["a", "e", "i", "o", "u"];
let consoantes = ["b", "c", "d", "f", "g", "j", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let espaço = " ";

//Declarar varável "texto" para indicar qual o texto vai ser utilizado na lógica
let texto = "Hello Kitty!!!!!";

//Deixar todas as letras da variável "texto" minúsculas 
texto = texto.toLowerCase();

//Criando um array com base na variável "texto". Cada caractere da string é um elemento do array
let arrayLetras = texto.split('');

//Criando arrays para armazenar as consoantes e vogais encontradas
let arrayVogais = [];
let arrayConsoantes = [];

//contador dos espaços
let espaços = 0;

//Laço de repetição criado para comparar cada elemento do array. 
//i = índice do elemento que está passando pelo for
for (let i = 0; i < arrayLetras.length; i++) {
    if (vogais.includes(arrayLetras[i])) {
        arrayVogais.push(arrayLetras[i]);
        //Se o elemento for uma vogal, inclui-lo no array "arrayVogais"

    } else if (consoantes.includes(arrayLetras[i])) {
        arrayConsoantes.push(arrayLetras[i]);
        //Se o elemento for uma consoante, inclui-lo no array "arrayConsoantes"

    } else if (espaço.includes(arrayLetras[i])) {
        espaços++
        //Se o elemento for igual "espaço", incrementar 1 em "Espaços"
    }
}

//Exibir consoantes separas por hífen (.join)
console.log("As consoantes presentes no texto são: " + arrayConsoantes.join('-'));
console.log("A quantidade de consoantes é: " + arrayConsoantes.length);

//Exibir vogais separas por hífen (.join)
console.log("As vogais presentes no texto são: " + arrayVogais.join('-'));
console.log("A quantidade de vogais é: " + arrayVogais.length);

//Exibir quantidade de espaços.
console.log("A quantidade de espaços: " + espaços);


