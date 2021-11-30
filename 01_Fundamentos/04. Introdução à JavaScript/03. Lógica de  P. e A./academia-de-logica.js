
var soma = 0;
function accumulator(limit) {
    for(var n = 1; n <= limit; n += 1) {
        soma = soma + n
    }
    console.log(soma);
}
accumulator(10)