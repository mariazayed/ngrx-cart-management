import {
    Component,
    Input,
} from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { AddToCart } from '../../actions/cart.actions';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../interfaces/app-state.interface';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.scss' ],
})
export class ProductListComponent {
    @Input() product!: ProductInterface;

    quantity: number = 0;

    constructor(private store: Store<AppStateInterface>) {
    }

    addToCart() {
        this.store.dispatch(new AddToCart({
            product: this.product,
            quantity: this.quantity,
        }));
        this.quantity = 0;
    }
}
