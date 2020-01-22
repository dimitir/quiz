import actionsType from './actionTypes';


const initialState = {
  modalSkip: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.SHOW_MODAL_CONFIRM:
      return {
        ...state,
        modalSkip: action.obj
      };
    case actionsType.CLOSE_MODAL_CONFIRM:
      return {
        ...state,
        modalSkip: action.obj
      };
    default:
      return state;
  }
}
