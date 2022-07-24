import createStore from 'create-store';
import reducer from './reducers/Reducer';

const store = createStore(reducer);
export default store;