// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto
//Mostre no console todas as propriedades desse objeto.
/*let AboutMe={
  CorFavorita:'Azul',
  Idade:18,
  ComidaFavorita: 'Macarrão Carbonara'
}
AboutMe.MusicaFavorita='Enemy';
delete AboutMe.Idade;

console.log(AboutMe);*/

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

let cadastro = [
  { nome: 'Bia',
  idade: 18,
  telefone: 99999-9999,
  amigos:['Bianca','Sara','Laura','Maria'],
  },
  { nome: 'Joana',
  idade: 27,
  telefone: 99999-9999,
  amigos:['Gabi','Alan','Hanna','Marta'],
  },
  { nome: 'Lucas',
  idade: 14,
  telefone: 99999-9999,
  amigos:['Marcus','Sofia','Lana','João'],
  },
  { nome: 'Julia',
  idade: 20,
  telefone: 99999-9999,
  amigos:['Bruna','Miguel','Grazi','Paulo'],
  },
  { nome: 'Camilla',
  idade: 22,
  telefone: 99999-9999,
  amigos:['Victor','Vanessa','Carol','Yasmin'],
  }
]
  for (var i = 0; i < cadastro.length; i++) {
    var lista = cadastro[i];
    console.log(lista.amigos[1]);
  }