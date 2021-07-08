import { Injectable } from '@angular/core';
import { CartProductInterface } from '../interfaces/cart-product.interface';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    private cart: CartProductInterface[] = [
        {
            quantity: 2,
            product: {
                name: 'test',
                price: 15,
                description: 'test description',
            },
        },
    ];

    constructor() {
    }

    getCartProducts(): CartProductInterface[] {
        return this.cart;
    }

    addProductToCart(value: CartProductInterface) {
        this.cart.push(value);
    }
}
