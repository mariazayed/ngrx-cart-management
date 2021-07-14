import { ProductInterface } from '../interfaces/product.interface';
import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    ProductActions,
} from '../actions/product.actions';

const initialState: ProductInterface[] = [
    {
        name: 'product 1',
        description: 'Product 1 description',
        price: 10,
    },
    {
        name: 'product 2',
        description: 'Product 2 description',
        price: 20,
    },
    {
        name: 'product 3',
        description: 'Product 3 description',
        price: 30,
    },
    {
        name: 'product 4',
        description: 'Product 4 description',
        price: 40,
    },
    {
        name: 'product 5',
        description: 'Product 5 description',
        price: 50,
    },
    {
        name: 'product 6',
        description: 'Product 6 description',
        price: 60,
    },
    {
        name: 'product 7',
        description: 'Product 7 description',
        price: 70,
    },
    {
        name: 'product 8',
        description: 'Product 8 description',
        price: 80,
    },
    {
        name: 'product 9',
        description: 'Product 9 description',
        price: 90,
    },
    {
        name: 'product 10',
        description: 'Product 10 description',
        price: 100,
    },
];
;

export function productReducer(state: ProductInterface[] = initialState, action: ProductActions) {
    switch (action.type) {
        case CREATE_PRODUCT:
            return [ ...state, action.payload ];
        case DELETE_PRODUCT:
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
}
