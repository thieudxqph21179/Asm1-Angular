import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router'
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0,],
    img:[""]
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router : Router ){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
        
         this.productForm.patchValue({
          name: product.name,
          price: product.price,
          img:product.img
        })
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {

     if (this.productForm.valid) {
      const newProduct: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || ""

      }
      this.productService.updateProduct(newProduct).subscribe(product => {
        console.log(product)
        this.router.navigate(['/admin/products'])
      })
    }
  }
}