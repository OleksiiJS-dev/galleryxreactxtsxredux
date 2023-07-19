import { createStore } from 'redux';

interface AppState {
    count: number;
};

const initialState: AppState = {
    count: 0,
};

const rootReducer = (state = initialState, action: any) =>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };
        default: 
            return state;

    }
};

const store = createStore(rootReducer);

export { store, rootReducer };