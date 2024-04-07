import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  animations: [
    trigger('hiddenState', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('500ms 500ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
    trigger('hiddenButton', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('500ms 2000ms ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class StartPageComponent implements OnInit{

  constructor(private router: Router){}
  
  ngOnInit(){
    
  }
  goShopping(){
    this.router.navigate(['main'])
  }
}
