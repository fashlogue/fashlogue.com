import { SHOW_MODAL, HIDE_MODAL } from './constants';

/**
 * @method showModal - invoke the modal to show on the dom
 * 
 * @param {Object} modalProps - the props for the modal.
 * 
 * @param {String} modalType - the particlular type of modal e.g tabModal, confirmModal etc. 
 * 
 * @return {Object}
 */
export const showModal = ({ modalProps, modalType }) => dispatch => {
    dispatch({
      type: SHOW_MODAL,
      modalProps,
      modalType
    });
  }

/**
 * @method hideModal - hide the visible modal 
 * 
 *  @return {Object}
 */
export const hideModal = () => dispatch => {
  dispatch({
    type: HIDE_MODAL
  });
}