import {
    Component,
    OnInit,
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: [ './create-product.component.scss' ],
})
export class CreateProductComponent implements OnInit {

    productForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.productForm = this.formBuilder.group({
            name: [ '', Validators.required ],
            price: [ '', Validators.required ],
            description: [ '' ],
        });
    }

}
