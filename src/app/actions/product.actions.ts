import { Action } from '@ngrx/store';
import { ProductInterface } from '../interfaces/product.interface';

export const CREATE_PRODUCT = 'Create product';
export const REMOVE_PRODUCT = 'Remove product';

export class CreateProduct implements Action {
    readonly type = CREATE_PRODUCT;

    constructor(public payload: ProductInterface) {
    }
}

export class RemoveProduct implements Action {
    readonly type = REMOVE_PRODUCT;

    constructor(public payload: number) {
    }
}

export type ProductActions = CreateProduct | RemoveProduct