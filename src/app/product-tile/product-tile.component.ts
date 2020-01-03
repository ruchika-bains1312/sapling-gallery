import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  public _product={title: 'title', price: '0', url: ''} ;
    @Input('product')
    set product(value: any) {
    this._product = value;
}
get product(){
  return this._product;
}
@Output() selectProduct = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  setSelectedPlant()
  {
    this.selectProduct.emit(this._product);
  }

}
