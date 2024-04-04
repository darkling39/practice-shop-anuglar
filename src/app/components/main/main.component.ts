import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  url:string = 'http://localhost:5000/products'

  data: Observable<string> = this.getProducts().pipe(
    map(msg => {
      return msg.message
    })
  )
  constructor(private http: HttpClient){}
  
  getProducts(){
    return this.http.get<any>(this.url)
  }
  ngOnInit() {

  }

}
