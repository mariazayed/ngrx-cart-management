import { Action } from '@ngrx/store';
import { CartProductInterface } from '../interfaces/cart-product.interface';

export const ADD_TO_CART = 'Add to cart';
export const REMOVE_FROM_CART = 'Remove from cart';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;

    constructor(public payload: CartProductInterface) {
    }
}

export class RemoveFromCart implements Action {
    readonly type = REMOVE_FROM_CART;

    constructor(public payload: number) {
    }
}

export type CartActions = AddToCart | RemoveFromCart
