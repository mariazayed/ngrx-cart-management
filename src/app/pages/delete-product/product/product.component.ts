import {
    Component,
    Input,
} from '@angular/core';
import { ProductInterface } from '../../../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../interfaces/app-state.interface';
import { DeleteProduct } from '../../../actions/product.actions';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [ './product.component.scss' ],
})
export class ProductComponent {

    @Input() product!: ProductInterface;
    @Input() index!: number;

    constructor(private store: Store<AppStateInterface>) {
    }

    delete() {
        this.store.dispatch(new DeleteProduct(this.index));
    }

}
