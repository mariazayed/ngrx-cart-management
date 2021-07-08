import { CartProductInterface } from './cart-product.interface';

export interface AppStateInterface {
    readonly cart: CartProductInterface[]
}
