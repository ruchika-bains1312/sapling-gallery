import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-try-on-garden',
  templateUrl: './try-on-garden.component.html',
  styleUrls: ['./try-on-garden.component.css']
})
export class TryOnGardenComponent implements OnInit {
  private products_list = [
    { title: 'Tulsi', price: '400', url: '../assets/img/tulsi.png' },
    { title: 'Rose', price: '200', url: '../assets/img/rose.png' },
    { title: 'Aloevera', price: '500', url: '../assets/img/aloevera.png' }

  ];
  private selectedProductSrc: string="";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data=> {
    //   this.products_list = data;
    // });
  }
  changeSelection(product:any){
console.log('emitted event', product);
this.selectedProductSrc= product.url;
setTimeout(function() {$("#tryon-event").trigger("click");
},1000);
  }

}
