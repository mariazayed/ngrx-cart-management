import { Action } from '@ngrx/store';
import { ProductInterface } from '../interfaces/product.interface';

export const CREATE_PRODUCT = 'Create product';
export const DELETE_PRODUCT = 'Delete product';

export class CreateProduct implements Action {
    readonly type = CREATE_PRODUCT;

    constructor(public payload: ProductInterface) {
    }
}

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;

    constructor(public payload: number) {
    }
}

export type ProductActions = CreateProduct | DeleteProduct
