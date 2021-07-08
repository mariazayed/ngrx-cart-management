import { Injectable } from '@angular/core';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductService {

    private products: ProductInterface[] = [
        {
            name: 'product 1',
            description: 'Product 1 description',
            price: 10,
        },
        {
            name: 'product 2',
            description: 'Product 2 description',
            price: 20,
        },
        {
            name: 'product 3',
            description: 'Product 3 description',
            price: 30,
        },
        {
            name: 'product 4',
            description: 'Product 4 description',
            price: 40,
        },
        {
            name: 'product 5',
            description: 'Product 5 description',
            price: 50,
        },
        {
            name: 'product 6',
            description: 'Product 6 description',
            price: 60,
        },
        {
            name: 'product 7',
            description: 'Product 7 description',
            price: 70,
        },
        {
            name: 'product 8',
            description: 'Product 8 description',
            price: 80,
        },
        {
            name: 'product 9',
            description: 'Product 9 description',
            price: 90,
        },
        {
            name: 'product 10',
            description: 'Product 10 description',
            price: 100,
        },
    ];

    constructor() {
    }

    getProducts() {
        return this.products;
    }
}
