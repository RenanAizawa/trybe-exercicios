// Atividade 1 
const retorno = (nome) => {
    return {
        nomeClompleto: nome,
        email:`${nome.replaceAll(' ', '_').toLowerCase()}@trybe.com`
    }
}
// console.log(retorno('Renan Aizawa Alves Mascarenhas'))
const newEmployees = () => {
    const employees = {
      id1: retorno('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: retorno('Luiza Drumon'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: retorno('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
// console.log(newEmployees())

// Atividade 2
