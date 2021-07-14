import {
    Component,
    OnInit,
} from '@angular/core';
import { ProductInterface } from '../../../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../interfaces/app-state.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: [ './products.component.scss' ],
})
export class ProductsComponent implements OnInit {

    products: Observable<ProductInterface[]>;

    constructor(private store: Store<AppStateInterface>) {
        this.products = store.select('products');
    }

    ngOnInit(): void {
    }
}
