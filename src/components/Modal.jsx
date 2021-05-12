import React, { Component } from 'react'

class Modal extends Component {

  constructor(props){
    super(props)
    this.box = null
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  handleOutsideClick(e) {
    if(this.box && !this.box.getDOMNode().contains(e.target)){
      this.props.handleClose()
    }
  }



  render(){

    const { show, handleClose, children } = this.props;

    var display = show ? 'modal__back modal__block' : 'modal__back modal__none';

    return(
      <div className={display} onClick={this.handleOutsideClick}>
        <section className="modal__main" ref={(e) => this.box = e}>
          {children}
        </section>
      </div>
    )
  }
}

Modal.displayName = 'Modal';

export default Modal;