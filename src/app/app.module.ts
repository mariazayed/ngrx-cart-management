import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';
import { CartProductComponent } from './components/cart-product/cart-product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        ProductListComponent,
        CartComponent,
        CartProductComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // @ts-ignore
        StoreModule.forRoot({ cart: cartReducer }),
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
