import React, { Component } from 'react'

class Modal extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const { show, handleClose, children } = this.props;

    var display = show ? ' modal__back modal__block' : ' modal__back modal__none';

    return(
      <div className={display}>
        <section className="modal__main">
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    )
  }
}

Modal.displayName = 'Modal';

export default Modal;