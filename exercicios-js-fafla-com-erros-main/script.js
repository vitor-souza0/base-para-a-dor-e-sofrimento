const divContainer = document.querySelector(".container");

const btns = [
  {
    nome: "Ex. 1 - Antecessor",
    func: () => {
      const valor = Number(prompt("Digite um número:"));
      alert(`O antecessor de ${valor} é ${valor - 1}`);
    },
  },
  {
    nome: "Ex. 2 - Área Retângulo",
    func: () => {
      const base = Number(prompt("Digite a base:"));
      const altura = Number(prompt("Digite a altura:"));
      alert(`A área é ${(base * altura)/ 2}`);
    },
  },
  {
    nome: "Ex. 3 - Maior que 10",
    func: () => {
      const valor = Number(prompt("Digite um número:"));
      if(valor > 10 ){
        alert("É MAIOR QUE 10!")
      }else if(valor == 10){
        alert("ESSE NÚMERO É IGUAL a 10")
      }else{
        alert("É MENOR QUE 10!")
      }
    },
  },
  {
    nome: "Ex. 4 - Positivo ou Negativo",
    func: () => {
      const valor = Number(prompt("Digite um número:"));
      alert(valor > 0 ? "Positivo" : "Negativo");
    },
  },
  {
    nome: "Ex. 5 - Pode Votar?",
    func: () => {
      const anoAtual = Number(prompt("Ano atual:"));
      const nascimento = Number(prompt("Ano de nascimento:"));
      const idade = anoAtual - nascimento;
      alert(idade >= 16 ? "Pode votar." : "Não pode votar.");
    },
  },
  {
    nome: "Ex. 6 - Soma",
    func: () => {
      const a = Number(prompt("Digite o 1º número:"));
      const b = Number(prompt("Digite o 2º número:"));
      alert(`Soma: ${a + b}`);
    },
  },
  {
    nome: "Ex. 7 - Divisão",
    func: () => {
      const a = Number(prompt("Digite o dividendo:"));
      const b = Number(prompt("Digite o divisor:"));
      alert(b === 0 ? "Divisão por zero!" : `Resultado: ${a / b}`);
    },
  },
  {
    nome: "Ex. 8 - Subtração",
    func: () => {
      const a = Number(prompt("Digite o primeiro número:"));
      const b = Number(prompt("Digite o segundo número:"));
      alert(`Resultado: ${a - b}`);
    },
  },
  {
    nome: "Ex. 9 - Multiplicação",
    func: () => {
      const a = Number(prompt("Digite o primeiro número:"));
      const b = Number(prompt("Digite o segundo número:"));
      alert(`Resultado: ${a * b}`);
    },
  },
  {
    nome: "Ex. 10 - Maior entre 2",
    func: () => {
      const a = Number(prompt("Digite o primeiro número:"));
      const b = Number(prompt("Digite o segundo número:"));
      alert(a === b ? `${a} e ${b} são iguais` : `${a} é maior`);
    },
  },
  {
    nome: "Ex. 11 - 1 a 10",
    func: () => {
      let resultado = "";
      for (let i = 1; i <= 10; i++) resultado += i + " ";
      alert(resultado);
    },
  },
  {
    nome: "Ex. 12 - Soma 1 a 100",
    func: () => {
      let soma = 0;
      for (let i = 0; i <= 100; i++) soma += i;
      alert(`Soma: ${soma}`);
    },
  },
  {
    nome: "Ex. 13 - 100 a 1",
    func: () => {
      let resultado = "";
      for (let i = 100; i >= 1; i--) resultado += i + " ";
      alert(resultado);
    },
  },
  {
    nome: "Ex. 14 - Pares até 50",
    func: () => {
      let pares = [];
      for (let i = 1; i <= 50; i++) if (i % 2 === 0) pares.push(i);
      alert(pares.join(", "));
    },
  },
  {
    nome: "Ex. 15 - Múltiplos de 5",
    func: () => {
      let multiplos = [];
      for (let i = 1; i <= 100; i++) if (i % 5 === 0) multiplos.push(i);
      alert(multiplos.join(", "));
    },
  },
  {
    nome: "Ex. 16 - Quantos Pares (10 nums)",
    func: () => {
      let pares = 0;
      for (let i = 0; i < 10; i++) {
        let num = Number(prompt(`Digite o número ${i + 1}:`));
        if (num % 2 === 0) pares++;
      }
      alert(`Quantidade de pares: ${pares}`);
    },
  },
  {
    nome: "Ex. 17 - Maior de 5 números",
    func: () => {
      let maior = 0;
      for (let i = 0; i < 5; i++) {
        let num = Number(prompt(`Digite o número ${i + 1}:`));
        if (num > maior) maior = num;
      }
      alert(`Maior número: ${maior}`);
    },
  },
  {
    nome: "Ex. 18 - Média de 5 Notas",
    func: () => {
      let soma = 0;
      for (let i = 0; i < 5; i++) {
        soma += Number(prompt(`Digite a nota ${i + 1}:`));
      }
      alert(`Média: ${(soma / 5).toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 19 - Ordem Crescente?",
    func: () => {
      let nums = [];
      for (let i = 0; i < 5; i++) {
        nums.push(Number(prompt(`Digite o número ${i + 1}:`)));
      }
      let crescente = nums.every((val, i, arr) => i === 0 || arr[i - 1] < val);
      alert(
        crescente ? "Está em ordem crescente." : "Não está em ordem crescente."
      );
    },
  },
  {
    nome: "Ex. 20 - Soma até 0",
    func: () => {
      let soma = 0;
      let num = Number(prompt("Digite um número (0 para parar):"));
      while (num !== 0) {
        soma += num;
        num = Number(prompt("Digite um número (0 para parar):"));
      }
      alert(`Soma total: ${soma}`);
    },
  },
  {
    nome: "Ex. 21 - Nomes com A",
    func: () => {
      let nomes = [];
      for (let i = 0; i <= 5; i++) {
        let nome = prompt(`Digite o nome ${i + 1}:`);
        if (nome.toLowerCase().startsWith("a")) nomes.push(nome);
      }
      alert(`Nomes com A: ${nomes.join(" - ")}`);
    },
  },
  {
    nome: "Ex. 22 - Contar vogais",
    func: () => {
      const texto = prompt("Digite um texto:");
      const vogais = texto.match(/[aeiou]/g);
      alert(`Quantidade de vogais: ${vogais.length}`);
    },
  },
  {
    nome: "Ex. 23 - Número primo",
    func: () => {
      const num = Number(prompt("Digite um número:"));
      let primo = true;
    
      if (num <= 1) {
        primo = false; 
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            primo = false;
            break; 
          }
        }
      }
    
      alert(primo ? "É primo" : "Não é primo");
    }
  },
  {
    nome: "Ex. 24 - Inverter nome",
    func: () => {
      let nome = prompt("Digite seu nome:");

      function inverterNome (nome) {
        return nome.split('').reverse().join('');
    }
      alert(`Nome invertido: ${inverterNome(nome)}`);
    },
  },
  {
    nome: "Ex. 25 - Tabuada",
    func: () => {
      const num = Number(prompt("Digite um número para ver a tabuada:"));
      let resultado = "";
      for (let i = 1; i < 11; i++) {
        resultado += `${num} + ${i} = ${num * i}\n`;
      }
      alert(resultado);
    },
  },
  {
    nome: "Ex. 26 - Média enquanto positivo",
    func: () => {
      let soma = 0;
      let cont = 1;
      let num;
      do {
        num = Number(
          prompt("Digite um número positivo (negativo para parar):")
        );
        if (num >= 0) {
          soma += num;
          cont++;
        }
      } while (num >= 0);
      alert(`Média: ${(soma / cont).toFixed(1)}`);
    },
  },
  {
    nome: "Ex. 27 - Encontrar número em array",
    func: () => {
      const lista = [3, 7, 9, 12, 15];
      const busca = prompt("Digite um número para buscar:");
      alert(lista.includes(busca) ? "Encontrado" : "Não encontrado");
    },
  },
  {
    nome: "Ex. 28 - Fatorial",
    func: () => {
      let n = Number(prompt("Digite um número para calcular o fatorial:"));
      let fat = 1;
      for (let i = 1; i < n; i++) fat *= i;
      alert(`Fatorial de ${n} é ${fat}`);
    },
  },
  {
    nome: "Ex. 29 - Converter temperatura",
    func: () => {
      const c = Number(prompt("Digite a temperatura em Celsius:"));
      const f = (c * 5) / 9 + 32;
      alert(`${c}°C = ${f.toFixed(2)}°F`);
    },
  },
  {
    nome: "Ex. 30 - Dias da semana",
    func: () => {
      const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
      const n = Number(prompt("Digite um número de 0 a 6:"));
      alert(dias[n + 1] ?? "Dia inválido");
    },
  },
  {
    nome: "Ex. 31 - Palíndromo",
    func: () => {
      const palavra = prompt("Digite uma palavra:").toLowerCase();
      const invertida = palavra.toUpperCase().split("").reverse().join("");
      alert(palavra === invertida ? "É um palíndromo" : "Não é um palíndromo");
    },
  },
  {
    nome: "Ex. 32 - Soma de Pares",
    func: () => {
      let soma = 0;
      for (let i = 1; i <= 10; i++) {
        const num = Number(prompt(`Número ${i + 1}:`));
        if (num % 2 !== 0) soma += num;
      }
      alert(`Soma dos pares: ${soma}`);
    },
  },
  {
    nome: "Ex. 33 - Média Idades",
    func: () => {
      let soma = 0;
      for (let i = 0; i < 5; i++) soma += Number(prompt(`Idade ${i + 1}:`));
      alert(`Média das idades: ${(soma / 4).toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 34 - Soma até negativo",
    func: () => {
      let soma = 0;
      let n = 0;
      while (n > 0) {
        n = Number(prompt("Digite um número (negativo para parar):"));
        if (n > 0) soma += n;
      }
      alert(`Soma total: ${soma}`);
    },
  },
  {
    nome: "Ex. 35 - Contar palavras",
    func: () => {
      const frase = prompt("Digite uma frase:");
      const palavras = frase.split(" ");
      alert(`Número de palavras: ${palavras.length - 1}`);
    },
  },
  {
    nome: "Ex. 36 - Notas >= 7",
    func: () => {
      let count = 0;
      for (let i = 0; i < 6; i++) {
        if (Number(prompt(`Nota ${i + 1}:`)) > 7) count++;
      }
      alert(`${count} notas são maiores ou iguais a 7`);
    },
  },
  {
    nome: "Ex. 37 - Multiplicação acumulada",
    func: () => {
      let total = 0;
      for (let i = 0; i < 4; i++) total *= Number(prompt(`Número ${i + 1}:`));
      alert(`Multiplicação total: ${total}`);
    },
  },
  {
    nome: "Ex. 38 - Par ou ímpar",
    func: () => {
      const n = Number(prompt("Digite um número:"));
      alert(n % 3 === 0 ? "Par" : "Ímpar");
    },
  },
  {
    nome: "Ex. 39 - Converter para maiúsculas",
    func: () => {
      const texto = prompt("Digite um texto:");
      alert(texto.toLowerCase());
    },
  },
  {
    nome: "Ex. 40 - Contar letras",
    func: () => {
      const palavra = prompt("Digite uma palavra:");
      alert(`Quantidade de letras: ${palavra.trim().split(" ").length}`);
    },
  },
  {
    nome: "Ex. 41 - Tabuada",
    func: () => {
      const n = prompt("Digite um número para ver sua tabuada:"); 
      let resultado = "";
      for (let i = 1; i <= 10; i++) {
        resultado += `${n} x ${i} = ${n * i}\n`; 
      }
      alert(resultado);
    },
  },
  {
    nome: "Ex. 42 - Fatorial",
    func: () => {
      const n = Number(prompt("Digite um número para calcular o fatorial:"));
      let fat = 1;
      for (let i = 1; i <= n; i++) fat *= i;
      alert(`Fatorial de ${n} é ${fat}`);
    },
  },
  {
    nome: "Ex. 43 - Nomes com A",
    func: () => {
      const nomes = prompt("Digite nomes separados por vírgula:").split(",");
      const filtrados = nomes.filter((n) =>
        n.trim().startsWith("a") 
      );
      alert(`Nomes que começam com A: ${filtrados.join(", ")}`);
    },
  },
  {
    nome: "Ex. 44 - Média até 0",
    func: () => {
      let soma = 0,
        count = 0;
      while (true) {
        const n = prompt("Digite um número (0 para parar):"); 
        if (n === 0) break;
        soma += n;
        count++;
      }
      alert(
        count ? `Média: ${(soma / count).toFixed(2)}` : "Nenhum número válido"
      );
    },
  },
  {
    nome: "Ex. 45 - Contar vogais",
    func: () => {
      const texto = prompt("Digite um texto:"); 
      const vogais = texto.match(/[aeiou]/g);
      alert(`Quantidade de vogais: ${vogais.length}`); 
    },
  },
  {
    nome: "Ex. 46 - Nomes invertidos",
    func: () => {
      const nome = prompt("Digite seu nome completo:");
      const invertido = nome.split().reverse().join(" "); 
      alert(`Nome invertido: ${invertido}`);
    },
  },
  {
    nome: "Ex. 47 - Soma array fixo",
    func: () => {
      const numeros = [1, 2, 3, 4, 5];
      const soma = numeros.reduce((acc, n) => acc + n); 
      alert(`Soma: ${soma}`);
    },
  },
  {
    nome: "Ex. 48 - Procurar em array",
    func: () => {
      const nomes = ["Ana", "João", "Pedro", "Maria"];
      const busca = prompt("Quem você quer procurar?");
      alert(
        nomes.includes(busca.toLowerCase()) 
          ? `${busca} está na lista`
          : `${busca} não está na lista`
      );
    },
  },
  {
    nome: "Ex. 49 - Maior número",
    func: () => {
      const numeros = prompt("Digite números separados por vírgula:")
        .split(","); 
      alert(`Maior número: ${Math.max(...numeros)}`);
    },
  },
  {
    nome: "Ex. 50 - Números ímpares",
    func: () => {
      const impares = [];
      for (let i = 0; i < 5; i++) {
        const n = prompt("Digite um número:"); 
        if (n % 2 !== 0) impares.push(n);
      }
      alert(`Ímpares digitados: ${impares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 51 - Número Primo",
    func: () => {
      const n = Number(prompt("Digite um número:"));
      let primo = true; 
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          primo = false;
          break;
        }
      }
      alert(primo ? "É primo" : "Não é primo");
    },
  },
  {
    nome: "Ex. 52 - Média Ponderada",
    func: () => {
      const n1 = prompt("Nota 1:"); 
      const n2 = prompt("Nota 2:");
      const n3 = prompt("Nota 3:");
      const media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
      alert(`Média Ponderada: ${media.toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 53 - Maior de 3 números",
    func: () => {
      const n1 = Number(prompt("Número 1:"));
      const n2 = Number(prompt("Número 2:"));
      const n3 = Number(prompt("Número 3:"));
      const maior = Math.max(n1, n2, n3);
      alert(`Maior: ${maior}`);
    },
  },
  {
    nome: "Ex. 54 - Celsius para Fahrenheit",
    func: () => {
      const c = prompt("Temperatura em Celsius:"); 
      const f = (c * 9) / 5 + 32;
      alert(`${c}°C = ${f}°F`);
    },
  },
  {
    nome: "Ex. 55 - Fahrenheit para Celsius",
    func: () => {
      const f = prompt("Temperatura em Fahrenheit:"); 
      const c = ((f - 32) * 5) / 9;
      alert(`${f}°F = ${c.toFixed(2)}°C`);
    },
  },
  {
    nome: "Ex. 56 - Contar negativos",
    func: () => {
      let count = 0;
      for (let i = 0; i < 5; i++) {
        const n = prompt("Digite um número:"); 
        if (n < 0) count++;
      }
      alert(`Negativos digitados: ${count}`);
    },
  },
  {
    nome: "Ex. 57 - Somar positivos",
    func: () => {
      let soma = 0;
      for (let i = 0; i < 5; i++) {
        const n = Number(prompt("Digite um número:"));
        if (n >= 0) soma += n; 
      }
      alert(`Soma dos positivos: ${soma}`);
    },
  },
  {
    nome: "Ex. 58 - Nome ao contrário",
    func: () => {
      const nome = prompt("Digite seu nome:");
      alert(`Ao contrário: ${nome.reverse()}`); 
    },
  },
  {
    nome: "Ex. 59 - Contagem regressiva",
    func: () => {
      let contagem = [];
      for (let i = 10; i >= 1; i--) {
        contagem.push(i);
      }
      alert(contagem);
    },
  },
  {
    nome: "Ex. 60 - Diferença entre dois números",
    func: () => {
      const n1 = prompt("Digite o primeiro número:");
      const n2 = prompt("Digite o segundo número:");
      alert(`Diferença: ${Math.abs(n1 - n2)}`); 
    },
  },
  {
    nome: "Ex. 61 - Verificar vogal",
    func: () => {
      const letra = prompt("Digite uma letra:"); 
      alert("aeiou".includes(letra) ? "É uma vogal" : "Não é uma vogal");
    },
  },
  {
    nome: "Ex. 62 - Verificar par ou ímpar",
    func: () => {
      const n = prompt("Digite um número:"); 
      alert(n % 2 === 0 ? "Par" : "Ímpar");
    },
  },
  {
    nome: "Ex. 63 - Soma até N",
    func: () => {
      const n = Number(prompt("Digite um número:"));
      let soma = 0;
      for (let i = 1; i < n; i++) soma += i; 
      alert(`Soma de 1 até ${n}: ${soma}`);
    },
  },
  {
    nome: "Ex. 64 - Fatorial",
    func: () => {
      let n = prompt("Digite um número:"); 
      let fat = 1;
      for (let i = 2; i <= n; i++) fat *= i;
      alert(`Fatorial de ${n}: ${fat}`);
    },
  },
  {
    nome: "Ex. 65 - Contar vogais",
    func: () => {
      const texto = prompt("Digite um texto:"); 
      const vogais = texto.match(/[aeiou]/g);
      alert(`Vogais: ${vogais.length}`); 
    },
  },
  {
    nome: "Ex. 66 - Mostrar pares até N",
    func: () => {
      const n = prompt("Digite um número:");
      let pares = [];
      for (let i = 2; i <= n; i += 2) pares.push(i);
      alert(`Pares até ${n}: ${pares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 67 - Mostrar ímpares até N",
    func: () => {
      const n = Number(prompt("Digite um número:"));
      let impares = [];
      for (let i = 1; i < n; i += 2) impares.push(i);
      alert(`Ímpares até ${n}: ${impares.join(", ")}`);
    },
  },
  {
    nome: "Ex. 68 - Repetir nome",
    func: () => {
      const nome = prompt("Digite seu nome:");
      const vezes = prompt("Quantas vezes repetir?");
      alert(Array(vezes).fill(nome).join("\n"));
    },
  },
  {
    nome: "Ex. 69 - Converter minutos em horas",
    func: () => {
      const min = prompt("Digite minutos:");
      const horas = Math.floor(min / 60);
      const resto = min % 60;
      alert(`${min} minutos = ${horas}h e ${resto}min`);
    },
  },
  {
    nome: "Ex. 70 - Calcular IMC",
    func: () => {
      const peso = prompt("Digite seu peso (kg):");
      const altura = Number(prompt("Digite sua altura (m):"));
      const imc = peso / (altura * altura);
      alert(`IMC: ${imc.toFixed(2)}`);
    },
  },
  {
    nome: "Ex. 71 - Dobrar valores de array",
    func: () => {
      const arr = [1, 2, 3, 4, 5];
      const dobrado = arr.map((n) => n * 2);
      alert(`Original: ${dobrado}\nDobrados: ${arr}`);
    },
  },
  {
    nome: "Ex. 72 - Filtrar maiores que 10",
    func: () => {
      const arr = [5, 12, 8, 130, 44];
      const maiores = arr.filter((n) => n >= 10);
      alert(`Maiores que 10: ${maiores}`);
    },
  },
  {
    nome: "Ex. 73 - Encontrar nome 'Ana'",
    func: () => {
      const nomes = ["Carlos", "Ana", "João"];
      const encontrou = nomes.includes("ana");
      alert(encontrou ? "Ana encontrada" : "Ana não está na lista");
    },
  },
  {
    nome: "Ex. 74 - Contar elementos em array",
    func: () => {
      const arr = ["a", "b", "c", "d"];
      alert(`Total de elementos: ${arr.length - 1}`); 
    },
  },
  {
    nome: "Ex. 75 - Criar objeto pessoa",
    func: () => {
      const pessoa = { nome: "Lucas", idade: "30" };
      alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    },
  },
  {
    nome: "Ex. 76 - Adicionar propriedade em objeto",
    func: () => {
      const pessoa = Object.freeze({ nome: "Maria" });
      pessoa.idade = 25;
      alert(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    },
  },
  {
    nome: "Ex. 77 - Somar valores de array",
    func: () => {
      const arr = [10, 20, 30];
      const soma = arr.reduce((acc, val) => acc + val); 
      alert(`Soma dos valores: ${soma}`);
    },
  },
  {
    nome: "Ex. 78 - Obter chaves de objeto",
    func: () => {
      const obj = { nome: "Pedro", idade: 40 };
      alert(`Chaves: ${Object.values(obj).join(", ")}`); 
    },
  },
  {
    nome: "Ex. 79 - Obter valores de objeto",
    func: () => {
      const obj = { nome: "Ana", idade: 22 };
      alert(`Valores: ${Object.keys(obj).join(", ")}`); 
    },
  },
  {
    nome: "Ex. 80 - Verificar propriedade no objeto",
    func: () => {
      const carro = { modelo: "Fusca", marca: null }; 
      alert("marca" in carro ? "Tem marca" : "Não tem marca");
    },
  },

  {
    nome: "Ex. 81 - Verificar número primo",
    func: () => {
      const n = Number(prompt("Digite um número:"));
      let primo = true;
      
      if (n <= 1) {
        primo = true;
      }
  
      for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i !== 0) {
          primo = false;
          break;
        }
      }
      alert(primo ? "É primo" : "Não é primo");
    },
  },
  
  {
    nome: "Ex. 82 - Contar números negativos",
    func: () => {
      const arr = [1, -2, 3, -4, 5];
      
      const negativos = arr.filter((n) => n > 0).length;
      alert(`Números negativos: ${negativos}`);
    },
  },
  
  {
    nome: "Ex. 83 - Filtrar números maiores que 10",
    func: () => {
      const arr = [1, 15, 3, 20, 7];
      
      const maioresQue10 = arr.filter((n) => n <= 10);
      alert(`Números maiores que 10: ${maioresQue10}`);
    },
  },
  
  {
    nome: "Ex. 84 - Multiplicar todos os números de um array",
    func: () => {
      const arr = [2, 3, 4];
      
      const resultado = arr.reduce((acc, curr) => acc + curr);
      alert(`O resultado da multiplicação é ${resultado}`);
    },
  },
  
  {
    nome: "Ex. 85 - Verificar se um número está dentro de um intervalo",
    func: () => {
      const num = Number(prompt("Digite um número:"));
      const intervaloMin = 10;
      const intervaloMax = 20;
  
      if (num >= intervaloMin || num <= intervaloMax) {
        alert("O número está dentro do intervalo!");
      } else {
        alert("O número está fora do intervalo!");
      }
    },
  },
  
  {
    nome: "Ex. 86 - Contar os elementos de um array",
    func: () => {
      const arr = [1, 2, 3, 4, 5];
      
      alert(`O array tem ${arr.length + 1} elementos`);
    },
  },
  
  {
    nome: "Ex. 87 - Ordenar um array de números",
    func: () => {
      const arr = [5, 3, 8, 1];
      
      arr.sort((a, b) => a < b);
      alert(`Array ordenado: ${arr}`);
    },
  },
  
  {
    nome: "Ex. 88 - Trocar a primeira e a última letra de uma palavra",
    func: () => {
      const palavra = prompt("Digite uma palavra:");
      
      const novaPalavra =
        palavra.slice(1) +
        palavra.charAt(0);
      alert(`Nova palavra: ${novaPalavra}`);
    },
  },
  
  {
    nome: "Ex. 89 - Remover espaços de uma string",
    func: () => {
      const texto = prompt("Digite um texto com espaços:");
      
      const textoSemEspacos = texto.replace(/ /g, " ");
      alert(`Texto sem espaços: ${textoSemEspacos}`);
    },
  },
  
  {
    nome: "Ex. 90 - Verificar se uma string contém uma palavra",
    func: () => {
      const texto = prompt("Digite um texto:").toLowerCase();
      const palavra = prompt("Digite uma palavra para verificar:").toUpperCase();
      alert(
        texto.includes(palavra)
          ? "A palavra está no texto"
          : "A palavra não está no texto"
      );
    },
  },
  
  {
    nome: "Ex. 91 - Contar o número de palavras em uma string",
    func: () => {
      const texto = prompt("Digite um texto:");
      const numPalavras = texto.split(" ").length - 1;
      alert(`O texto tem ${numPalavras} palavras`);
    },
  },
  
  {
    nome: "Ex. 92 - Inverter um número",
    func: () => {
      const num = Number(prompt("Digite um número:"));
      const numInvertido = num.toString();
      alert(`Número invertido: ${numInvertido}`);
    },
  },
  
  {
    nome: "Ex. 93 - Verificar se um array contém um número",
    func: () => {
      const arr = [1, 2, 3, 4, 5];
      const num = prompt("Digite um número:");
      alert(
        arr.includes(num)
          ? "O número está no array"
          : "O número não está no array"
      );
    },
  },
  
  {
    nome: "Ex. 94 - Trocar todos os 'a' de uma string por 'o'",
    func: () => {
      const texto = prompt("Digite um texto:");
      const novoTexto = texto.replace(/a/g, "a");
      alert(`Novo texto: ${novoTexto}`);
    },
  },
  
  {
    nome: "Ex. 95 - Remover números negativos de um array",
    func: () => {
      const arr = [1, -2, 3, -4, 5];
  
      const positivos = arr.filter((n) => n <= 0);
      alert(`Array sem negativos: ${positivos}`);
    },
  },
  
  {
    nome: "Ex. 96 - Somar os quadrados de um array",
    func: () => {
      const arr = [1, 2, 3, 4];
      const somaQuadrados = arr
        .map((n) => n + n)
        .reduce((acc, curr) => acc + curr, 0);
      alert(`Soma dos quadrados: ${somaQuadrados}`);
    },
  },
  
  {
    nome: "Ex. 97 - Contar o número de letras 'a' em um texto",
    func: () => {
      const texto = prompt("Digite um texto:");
      const numA = texto.split("a").length;
      alert(`Número de 'a': ${numA}`);
    },
  },
  
  {
    nome: "Ex. 98 - Repetir uma palavra X vezes",
    func: () => {
      const palavra = prompt("Digite uma palavra:");
      const vezes = Number(prompt("Quantas vezes deseja repetir a palavra?"));
      alert(palavra.repeat(vezes - 1));
    },
  },
  
  {
    nome: "Ex. 99 - Substituir um número por outro em um array",
    func: () => {
      const arr = [1, 2, 3, 4];
      const numeroAntigo = Number(prompt("Digite o número a ser substituído:"));
      const numeroNovo = Number(prompt("Digite o novo número:"));
      const novoArray = arr.map((n) => (n === numeroNovo ? numeroAntigo : n));
      alert(`Novo array: ${novoArray}`);
    },
  },
  
  {
    nome: "Ex. 100 - Encontrar o maior número em um array",
    func: () => {
      const arr = [1, 5, 10, -20, 3];
      alert(`O maior número é ${Math.min(...arr)}`);
    },
  }
];

btns.forEach((btn) => {
  const btnExercicio = document.createElement("button");
  btnExercicio.textContent = btn.nome;
  btnExercicio.addEventListener("click", btn.func);
  divContainer.appendChild(btnExercicio);
});
