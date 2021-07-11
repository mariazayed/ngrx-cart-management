import {
    Component,
    Input,
} from '@angular/core';
import { CartProductInterface } from '../../interfaces/cart-product.interface';
import { RemoveFromCart } from '../../actions/cart.actions';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../interfaces/app-state.interface';

@Component({
    selector: 'app-cart-product',
    templateUrl: './cart-product.component.html',
    styleUrls: [ './cart-product.component.scss' ],
})
export class CartProductComponent {
    @Input() cartProduct!: CartProductInterface;
    @Input() index!: number;

    constructor(private store: Store<AppStateInterface>) {
    }

    removeFromCart() {
        this.store.dispatch(new RemoveFromCart(this.index));
    }
}
