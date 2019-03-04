
import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';

import { SHOW_MODAL } from './constants';
import {default as modalTypes} from '../../components/Modal'

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const MODAL_TYPES = {
  'tab': modalTypes.tabModal,
}

const mapStateToProps = state => ({
  ...state.modal
})


class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      })
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    if (!this.props.modalType) {
      return null
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType]
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={false}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <SpecifiedModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
            {...this.props}
          />
        </ReactModal>
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(ModalContainer)