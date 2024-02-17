import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, AfterViewInit{
  constructor(private router: Router){}

  hiddenBall = true
  hiddenButton = true
  
  ngOnInit(){
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.hiddenBall = !this.hiddenBall
      setTimeout(() => {
        this.hiddenButton = !this.hiddenButton
      }, 1000)
    }, 1500)
  }
  goShopping(){
    this.router.navigate(['main'])
  }
}
