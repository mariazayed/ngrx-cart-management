import {
    Component,
    OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../interfaces/app-state.interface';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
    selector: 'app-delete-product',
    templateUrl: './delete-product.component.html',
    styleUrls: [ './delete-product.component.scss' ],
})
export class DeleteProductComponent implements OnInit {

    products: Observable<ProductInterface[]>;

    constructor(private store: Store<AppStateInterface>) {
        this.products = store.select('products');
    }

    ngOnInit(): void {
    }

}
