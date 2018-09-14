import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : 'Mon premier Post',
      content : "Bonjour , il s'agit de mon premier post; j'aimerais dire qu'angular c'est de la" 
                  +" dynamite"
    },
    {
      title : 'Mon deuxième Post',
      content : "Bonjour , il s'agit de mon deuxième post; j'aimerais dire qu'angular c'est de la" 
                  +" dynamite"
    },
    {
      title : 'Un autre Post',
      content : "Bonjour , il s'agit d'un autre post; j'aimerais dire qu'angular c'est de la" 
                  +" dynamite"
    }
  ];
}
