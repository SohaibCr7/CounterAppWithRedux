import {createStore,combineReducers} from "redux";
import {counter} from "../Reducer/reducer";

const reducers = {
    counter,
};

const rootReducers = combineReducers(reducers);
const store = createStore(counter)
//  const  store = () => createStore(rootReducers);
 export default store