import { CartProductInterface } from '../interfaces/cart-product.interface';
import {
    ADD_TO_CART,
    CartActions,
    REMOVE_FROM_CART,
} from '../actions/cart.actions';

const initialState: CartProductInterface = {
    product: {
        name: 'Initial product',
        price: 10,
        description: 'Initial product description',
    },
    quantity: 5,
};

export function cartReducer(state: CartProductInterface[] = [ initialState ], action: CartActions) {
    switch (action.type) {
        case ADD_TO_CART:
            return [ ...state, action.payload ];
        case REMOVE_FROM_CART:
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
}
