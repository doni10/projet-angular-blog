import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() monPostTitle: string ;
  @Input() monPostContent: string ;
  @Input() loveIts: number ;
  @Input() created_at: Date ;
  
  constructor() {
    this.created_at = new Date();
    this.loveIts = 0;
    this.monPostContent = "";
    this.monPostTitle = "";
   }

  ngOnInit() {
  }

  increaseLike(){
    this.loveIts++ ;
  }

  decreaseLike(){
    this.loveIts-- ;
  }
  getColor(){
    if (this.loveIts > 0){
      return 'green';
    } else if (this.loveIts < 0){
      return 'red';
    }
  }

  getDate(){
    return this.created_at;
  }

}
