import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import TextReducer from "./TextReducer";
import UsersReducer from "./UsersReducer";
import HotelReducer from "./HotelReducer";


//5 reducers in your app, then mention all of them here
export const RootReducer = combineReducers({ TextReducer, UsersReducer, HotelReducer });

//schema of our root reducer. it is used for reading data from reducer
/*
{
    TextReducer: {name:string},
    UsersReducer: [{}]
}
*/
export type AppState = ReturnType<typeof RootReducer>;

//connection between react and redux.
export const ConfigureStore = () => {
    return createStore(RootReducer, {}, devToolsEnhancer({}));
}