import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { url } from 'inspector';
import { Livro } from '../shared/livro';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
})
export class InfosPage implements OnInit {
  livro:Livro;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private dados:ActivatedRoute,private livroService: LivroService) {
    this.dados.params.subscribe(params => {
      let id = params['id'];
      this.getLivro(id);
      });
   } 

  ngOnInit() {
    
  }

  getLivro(livro: number) {
    this.livro = this.livroService.getLivros().filter(l => l.isbn == livro)[0];
    document.getElementById('img-capa').style. backgroundImage = "url('"+this.livro.capa+"')";
  }

 
}
