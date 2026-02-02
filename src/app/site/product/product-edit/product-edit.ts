import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '../../../injproducts';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.css',
})
export class ProductEdit implements OnInit {
  
  public angForm: FormGroup = new FormGroup({});
  public productName: FormControl = new FormControl({});
  public productDescription: FormControl = new FormControl({});
  public productPrice: FormControl = new FormControl({});
  private route = inject(ActivatedRoute);
  private id = this.route.snapshot.params['id'];

  constructor(private fb: FormBuilder, private lss: LocalStorageService, private router: Router) { }

  public ngOnInit(): void {

    this.productName = this.fb.control('', [Validators.required]);
    this.productDescription = this.fb.control('', [Validators.required]);
    this.productPrice = this.fb.control('', [Validators.required]);
    this.angForm = this.fb.group({
      productName: this.productName,
      productDescription: this.productDescription,
      productPrice: this.productPrice,
    });
    this.loadProductData();

  };

  private loadProductData(): void {
    const product = this.lss.getItem<Product>(this.id);
    if (product) {
      this.angForm.patchValue({
        id: this.id,
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
      });
    }
  }

  protected onSubmit(): void {

    const updatedProduct = {
      id: this.id,
      productName: this.angForm.value.productName,
      productDescription: this.angForm.value.productDescription,
      productPrice: this.angForm.value.productPrice,
    };
    this.lss.setItem(this.id, updatedProduct);
    this.router.navigate(['/products']);

  };

}
