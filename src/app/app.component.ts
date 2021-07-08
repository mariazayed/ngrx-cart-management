import {
    Component,
    OnInit,
} from '@angular/core';
import { ProductInterface } from './interfaces/product.interface';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { CartProductInterface } from './interfaces/cart-product.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
    products: ProductInterface[] = [];
    cartProducts: CartProductInterface[] = [];


    constructor(private productService: ProductService,
                private cartService: CartService) {
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.cartProducts = this.cartService.getCartProducts();
    }
}
