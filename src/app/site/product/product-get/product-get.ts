import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/product';
import { LocalStorageService } from '../../../injproducts';

@Component({
  selector: 'app-product-get',
  imports: [],
  templateUrl: './product-get.html',
  styleUrl: './product-get.css',
})
export class ProductGet implements OnInit {

  protected products: Product[] = [];

  constructor(private lss: LocalStorageService, private router: Router) { }

  public ngOnInit(): void {

    this.loadProducts();

  }

  private loadProducts(): void {

    const keys = this.lss.getKeys();
    this.products = keys.map(key => {
        const product = this.lss.getItem<Product>(key);
        return product ? { ...product, id: key } : null;
      }).filter(Boolean) as Product[];

  }

  protected deleteProduct(id: string): void {

    this.lss.removeItem(id.toString());
    this.loadProducts();
    
  };

  protected editProduct(id: string): void {

    this.router.navigate(['/products/edit', id]);

  }

}