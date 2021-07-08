import {
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { ProductInterface } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: [ './product.component.scss' ],
})
export class ProductComponent implements OnInit {
    @Input() product!: ProductInterface;
    @Input() index!: number;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
    }

    addToCart() {
        const cartProducts = this.cartService.getCartProducts();
        this.cartService.addProductToCart({
            product: cartProducts[this.index].product,
            quantity: this.index + 1,
        });
    }
}
