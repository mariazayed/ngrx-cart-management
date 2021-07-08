import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { CartProductInterface } from '../../interfaces/cart-product.interface';

@Component({
    selector: 'app-cart-product',
    templateUrl: './cart-product.component.html',
    styleUrls: [ './cart-product.component.scss' ],
})
export class CartProductComponent implements OnInit {
    @Input() cartProduct!: CartProductInterface;
  
    constructor() {
    }

    ngOnInit(): void {
    }

}
