import {
    Component,
    OnInit,
} from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../interfaces/app-state.interface';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [ './product.component.scss' ],
})
export class ProductComponent implements OnInit {

    products: Observable<ProductInterface[]>;

    constructor(private store: Store<AppStateInterface>) {
        this.products = store.select('products');
    }

    ngOnInit(): void {
    }
}
