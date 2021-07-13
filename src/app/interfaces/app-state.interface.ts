import { CartProductInterface } from './cart-product.interface';
import { ProductInterface } from './product.interface';

export interface AppStateInterface {
    readonly cart: CartProductInterface[]
    readonly products: ProductInterface[]
}
