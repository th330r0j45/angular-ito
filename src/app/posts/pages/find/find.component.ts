import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(
    private postsService:PostsService
  ) { }

  ngOnInit(): void {
  }
  // buscando(){
  //   debugger
  //   this.postsService.getSugerencias( this.termino.trim())
  //   .subscribe( heroes => this.heroes =  heroes);
  // }
  // opcionSeleccionada(event:MatAutocompleteSelectedEvent){

  //   if (!event.option.value) {
  //     this.heroeSelecionado = undefined;
  //     return
  //   }

  //   const heroe:Heroe = event.option.value
  //   this.termino = heroe.nombre;

  //   this.heroesService.getHeroesPorId( heroe.categoriaId).subscribe(heroe => this.heroeSelecionado = heroe);
  // }

}
