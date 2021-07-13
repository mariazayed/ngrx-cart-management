import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { CartProductInterface } from '../../interfaces/cart-product.interface';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: [ './cart.component.scss' ],
})
export class CartComponent {

    cartProducts: Observable<CartProductInterface[]>;

    constructor(private store: Store<AppStateInterface>) {
        this.cartProducts = store.select('cart');
    }
}
