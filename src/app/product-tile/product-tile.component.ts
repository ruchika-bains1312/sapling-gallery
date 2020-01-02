import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  private _product:object={} ;
    @Input('product')
    set product(value: object) {
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
