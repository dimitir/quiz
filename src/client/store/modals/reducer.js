import actionsType from '../actionTypes';


const initialState = {
  modalConfirm: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsType.SHOW_MODAL_CONFIRM:
      return {
        ...state,
        modalConfirm: action.obj
      };
    case actionsType.CLOSE_MODAL_CONFIRM:
      return {
        ...state,
        modalConfirm: action.obj
      };
    default:
      return state;
  }
}
