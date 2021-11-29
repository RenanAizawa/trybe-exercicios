let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("1) : ")
    console.log(numbers)
console.log("2) : ")
    var soma = 0;
    for(var n = 0; n < numbers.length; n += 1) {
        soma = soma + numbers[n]
    }
    console.log(soma)
console.log("3) : ")
    var mediaAritimetica = soma / numbers.length
    console.log(mediaAritimetica)
console.log("4) : ")
    if(mediaAritimetica > 20) {
        console.log("valor maior que 20")
    } else {
        console.log("valor menor ou igual a 20")
    }
console.log("5) : ")
    var maiorValor = 0;
    for(var m = 0; m < numbers.length; m += 1) {
        if (maiorValor < numbers[m]) {
            maiorValor = numbers[m]
        }
    }
    console.log("O maior valor é " + maiorValor)
console.log("6) : ")
    var contImpares = 0;
    for(var b = 0; b < numbers.length; b += 1) {
        if((numbers[b] % 2) > 0 ) {
            contImpares += 1;
        }
    }
    console.log(contImpares)
console.log("7) : ")
    var menorValor = numbers[0];
    for(var v = 0; v < numbers.length; v += 1) {
        if (menorValor > numbers[v]) {
            menorValor = numbers[v]
        }
    }
console.log("O maior valor é " + menorValor)
console.log("8) : ")
    var numbers2 = [];
    for(var c= 1; c <= 25; c += 1) {
        numbers2.push(c);
    }
    console.log(numbers2)
console.log("9) : ")
    for(var x = 0; x < numbers2.length; x += 1) {
        console.log(numbers2[x] / 2)
    }