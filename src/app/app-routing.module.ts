import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
} from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';

const routes: Routes = [
    {
        path: 'shop',
        component: ShopComponent,
    },
    {
        path: 'create-product',
        component: CreateProductComponent,
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
