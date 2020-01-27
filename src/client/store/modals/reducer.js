import actionsType from '../actionTypes';


const initialState = {
  modalConfirmVal: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.SHOW_MODAL_CONFIRM:
      return {
        ...state,
        modalConfirmVal: action.obj
      };
    case actionsType.CLOSE_MODAL_CONFIRM:
      return {
        ...state,
        modalConfirmVal: action.obj
      };
    default:
      return state;
  }
}
