import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/shop/product/product.component';
import { ProductListComponent } from './pages/shop/product-list/product-list.component';
import { CartComponent } from './pages/shop/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';
import { CartProductComponent } from './pages/shop/cart-product/cart-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ShopComponent } from './pages/shop/shop.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { productReducer } from './reducers/product.reducer';
import { DeleteProductComponent } from './pages/delete-product/delete-product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent,
        CartComponent,
        CartProductComponent,
        ShopComponent,
        CreateProductComponent,
        DeleteProductComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        StoreModule.forRoot({
            // @ts-ignore
            cart: cartReducer,
            // @ts-ignore
            products: productReducer,
        }),
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
