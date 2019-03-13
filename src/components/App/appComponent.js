import * as React from 'react';
import { PropTypes } from 'prop-types';
import {
  Base,
  GlobalStyle,
} from '../UI';
import { connect } from 'react-redux'
import {showModal, hideModal } from '../../containers/Modal/actions'
import { ModalRoot } from '../../containers/Modal';
import { Header } from '../Header';

const appComponent = ({ children, ...props }) => {

  return (
    <Base>
      <GlobalStyle />
      <Base style={{
        width: '100%'
      }}>
        <Header {...props}/>
      </Base>
      <Base>
        {children}
      </Base>
      <ModalRoot {...props}/>
    </Base>
  );
};

appComponent.propTypes = {
  children: PropTypes.element,
};
const mapStateToProps = state => {
  return {
    ...state.modal
  }
}



const mapDispatchToProps = dispatch => ({ 
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
   dispatch(showModal({ modalProps, modalType }))
  }
 })

export default connect(mapStateToProps, mapDispatchToProps)(appComponent);
