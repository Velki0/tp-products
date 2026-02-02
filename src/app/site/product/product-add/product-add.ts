import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../injproducts';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.html',
  styleUrl: './product-add.css'
})
export class ProductAdd implements OnInit {

  public angForm: FormGroup = new FormGroup({});
  public productName: FormControl = new FormControl({});
  public productDescription: FormControl = new FormControl({});
  public productPrice: FormControl = new FormControl({});

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

  };

  protected onSubmit(): void {

    let nextId: number = this.lss.length() + 1;
    const newProduct = {
      id: nextId.toString(),
      productName: this.productName.value,
      productDescription: this.productDescription.value,
      productPrice: this.productPrice.value,
    };
    this.lss.setItem(nextId.toString(), newProduct);
    console.log('Product added:', newProduct);
    this.angForm.reset();
    this.router.navigate(['/products']);

  };

}
