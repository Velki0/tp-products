import { Routes } from '@angular/router';
import { ProductGet } from './site/product/product-get/product-get';
import { ProductAdd } from './site/product/product-add/product-add';
import { ProductEdit } from './site/product/product-edit/product-edit';

export const routes: Routes = [
    { path: 'products', component: ProductGet },
    { path: 'products/add', component: ProductAdd },
    { path: 'products/edit/:id', component: ProductEdit },
];
