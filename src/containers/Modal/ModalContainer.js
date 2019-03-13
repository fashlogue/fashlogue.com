
import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal';
import {default as modalTypes} from '../../components/Modal'

const customStyles = {
  content : {
    top                   : '50%',
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

/**
 * @class ModalContainer - create a modal portal component
 * 
 * @return {React.ReactNode} 
 */

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
 
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      })
    }
  }

  /**
   * @method closeModal - close the opened modal
   * 
   * @return {Void}
   *  
   */
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
          contentLabel="Example Modal"
          style={customStyles}
          ariaHideApp={false}
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
