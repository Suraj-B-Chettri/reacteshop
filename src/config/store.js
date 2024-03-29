import {createStore, combineReducers} from 'redux'
import cartReducer from '../features/cart/reducers';

const rootReducer = combineReducers({
    cart : cartReducer
})

const store  = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store