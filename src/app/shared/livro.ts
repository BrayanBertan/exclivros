import { Genero } from './genero.enum';

export class Livro {

    isbn: number;
    titulo: string;
    autor: string;
    capa: string;
    genero: Genero;
    paginas:number;
    dataLancamento: Date;


    constructor(isbn: number,titulo:string,autor: string,capa: string,genero: Genero,paginas:number,dataLancamento: Date) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.capa = capa;
        this.genero = genero;
        this.paginas = paginas;
        this.dataLancamento = dataLancamento;
    }
}
