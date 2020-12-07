import { Injectable } from '@angular/core';
import { Genero } from './genero.enum';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  livros: Livro[];
  constructor() {
    this.livros = [
      new Livro(8566636740, "OS SENHORES DOS DINOSSAUROS", "Victor Milán", "https://d188rgcu4zozwl.cloudfront.net/content/B0765DQ5QH/resources/408866066", Genero.FICCAO, 480, new Date(2015, 8, 30)),
      new Livro(8566636406, "O Demonologista", "Andrew Pyper", "https://images-na.ssl-images-amazon.com/images/I/412vCy3R+RL._SX351_BO1,204,203,200_.jpg", Genero.MISTERIO, 320, new Date(2013, 2, 5)),
      new Livro(9788560280940, "It: A Coisa", "Stephen King", "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg", Genero.TERROR, 1208, new Date(2014, 7, 4)),
      new Livro(8581050395, "O cemitério", "Stephen King", "https://images-na.ssl-images-amazon.com/images/I/41JKIysJ4oL._SX338_BO1,204,203,200_.jpg", Genero.MISTERIO, 424, new Date(2013, 3, 24)),
      new Livro(8581050395, "Os segredos da mente milionária", "T. Harv Eker", "https://images-na.ssl-images-amazon.com/images/I/51AZlijPtYL._SX336_BO1,204,203,200_.jpg", Genero.ADMINFIN, 192, new Date(1992, 8, 1)),
      new Livro(9788544106037, "A primeira guerra mundial:Os 1.590 dias que transformaram o mundo", "Martin Gilbert", "https://images-na.ssl-images-amazon.com/images/I/51+vu2KPDXL._SX340_BO1,204,203,200_.jpg", Genero.GUERRA, 832, new Date(2017, 1, 1)),
      new Livro(9788577344673, "A segunda guerra mundial:Os 2.174 dias que mudaram o mundo", "Martin Gilbert", "https://images-na.ssl-images-amazon.com/images/I/51SOET4DhTL._SX353_BO1,204,203,200_.jpg", Genero.GUERRA, 976, new Date(2014, 1, 1)),
      new Livro(9788592159528, "As aventuras do fusca a vela", "Jonas Picolli", "http://www.grupoueba.com.br/img/dummies/slides/logofusca.png", Genero.AVENTURA, 192, new Date(2017, 5, 1)),
      new Livro(9788595083271, "Do Mil ao Milhão. Sem Cortar o Cafezinho", "Thiago Nigro", "https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SX335_BO1,204,203,200_.jpg", Genero.ADMINFIN, 192, new Date(2018, 11, 10)),
      new Livro(9788545200345, "O poder da ação", "Paulo Vieira", "https://images-na.ssl-images-amazon.com/images/I/41BZRzELoYL._SX340_BO1,204,203,200_.jpg", Genero.ADMINFIN, 256, new Date(2015, 6, 1)),
    ];
  }

  getLivros() {
    return this.livros;
  }

  excluir(livro: Livro) {
    this.livros = this.livros.filter(l => l.isbn !== livro.isbn);
  }
}
