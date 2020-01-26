import actionsType from '../actionTypes';


const initialState = {
    quizRezultItems: []
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsType.SAVE_TEST_RESULTS:
            return {
                ...state,
                quizRezultItems: action.obj
            };
        default:
            return state;
    }
}
