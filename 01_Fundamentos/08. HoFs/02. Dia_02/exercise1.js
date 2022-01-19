const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.  
// const findauthirBornIn1947 = (array) => {
//     return array.find( (item) => item.author.birthYear === 1947)
// };
//  console.log(findauthirBornIn1947(books));

//  2 - retorne o nome do livro de menor nome.
function smallerName(array) {
    let nameBook = array[0].name;
    // escreva aqui o seu código
    array.forEach(element => {
        nameBook = element.name;
        if (nameBook.length > element.name.length ) {
            nameBook = element.name
        }
        return nameBook
    });
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

  console.log(books[0].name.length);

  console.log(smallerName(books));