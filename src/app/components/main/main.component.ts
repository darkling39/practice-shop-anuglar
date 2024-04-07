import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from 'src/assets/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  url:string = 'http://localhost:5000/products'
  responseData:any
  // data: Observable<string> = this.getProducts().pipe(
  //   map(msg => {
  //     return msg.message
  //   })
  // )
  constructor(private http: HttpClient){}
  postProduct(){
    const item = {
      name: "Athomic Bomb",
      price:"12.2"
    }
    return this.http.post<IProduct>(this.url, item).subscribe(data => {
      this.responseData = data
    })
  }
  getProducts(){
    return this.http.get<any>(this.url)
  }
  ngOnInit() {
    // this.postProduct().subscribe(data => {
    //   this.responseData = data
    //   console.log(this.responseData);
    // })
    
  }
}