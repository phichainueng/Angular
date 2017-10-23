import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mycartoon',
    templateUrl: './mycartoon.component.html',
    styleUrls: ['./mycartoon.component.css']
  })
  export class MycartoonComponent implements OnInit{
      private name :String[];
      private bod : Number[];
      constructor(){}

      ngOnInit(){
          this.name = ["Detective Conan","One Piece","Naruto"];
          this.bod = [1994,1997,1999];
      }
  }