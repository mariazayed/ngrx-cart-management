import {
    Component,
    OnInit,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateProduct } from '../../actions/product.actions';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: [ './create-product.component.scss' ],
})
export class CreateProductComponent implements OnInit {

    productForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private store: Store) {
    }

    ngOnInit(): void {
        this.productForm = this.formBuilder.group({
            name: [ '', Validators.required ],
            price: [ '', Validators.required ],
            description: [ '' ],
        });
    }

    async createProduct() {
        const info = this.productForm.getRawValue();
        console.log('info', info);
        await this.store.dispatch(new CreateProduct(info));
        alert('Added Successfully!');
        this.productForm.reset();
    }
}
