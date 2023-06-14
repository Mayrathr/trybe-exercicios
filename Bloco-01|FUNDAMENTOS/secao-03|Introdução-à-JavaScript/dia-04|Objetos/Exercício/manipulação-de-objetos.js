const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

function addProperty(object, key, value){
  if(typeof object[key] === "undefined"){
    object[key] = value;
  }
};

addProperty(reader.favoriteBooks, 'title', 'Harry Potter e o Prisioneiro de Azkaban',);

addProperty(, 'linkedIn', 'Mayrathr');

reader.favoriteBooks.push()

let message1 = `O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[0].title}.`;



console.log(message1);