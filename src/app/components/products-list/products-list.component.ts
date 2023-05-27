import { Component, Input,Output,EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
// @Input() products: IProduct[] = [];
// @Output() onRemove = new EventEmitter<number>()
  //  title = 'Quản lý sản phẩm';
  // status: boolean = false;
  // valueInput: string = "";
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => {
      console.log(error.message)
    })
  }
  toggle() {
    // this.status = !this.status;
  }
  setValue(e: any) {
    // this.valueInput = e.target.value;
  }
  removeItem(id:any){
    this.productService.deleteProduct(id).subscribe(() => {
      console.log('delete thanhf cong')
    })
  }
}
