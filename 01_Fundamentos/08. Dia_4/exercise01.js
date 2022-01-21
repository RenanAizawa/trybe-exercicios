// Exemplo 1

// const num = [12, 21, 32, 53, 65, 10];
// const sumNumbrs = num.reduce((acumulator, number) => acumulator + number);
// console.log(sumNumbrs);


// Exemplo 2

// const numbers = [32, 15, 3, 2, -5, 56, 10];
// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 150); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113


// Exemplo 3


const numbers = [50, 85, -30, 3, 15, 100, 150, -50];

const getBigger = (bigger, number) =>{ return ((bigger > number) ? bigger : number)};

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

