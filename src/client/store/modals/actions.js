import actionTypes from '../actionTypes';


export const showModalConfirm = (obj) => ({
  type: actionTypes.SHOW_MODAL_CONFIRM,
  obj
});


export const closeModalConfirm = (obj) => ({
  type: actionTypes.CLOSE_MODAL_CONFIRM,
  obj
});


