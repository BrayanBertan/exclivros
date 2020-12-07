import { Component, OnInit } from '@angular/core';
import { Livro } from '../shared/livro';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  lista:Livro[];
  filtro:string;
  constructor(private livroService: LivroService) { }

  ngOnInit() {
   this.listar();
   this.filtro = "";
  }

  listar():void{this.lista = this.livroService.getLivros()};

  excluir(livro:Livro):void {
    this.livroService.excluir(livro);
    this.listar();
  }

  filtrar():void {
    if(this.filtro.trim() === '') { 
      this.listar();
    }else{
      this.lista = this.lista.filter(l => l.titulo.toLowerCase().indexOf(this.filtro.toLowerCase()) > -1);
    }
    
  }

}
