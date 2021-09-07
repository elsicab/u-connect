import React from 'react';
import MiddleContainer from '../middle_section/middle_container';

class Modal extends React.Component{

  render(){
    if(!this.props.modal){
          return null;
      }
    return(
      <div>In Modal</div>
    )
  }
  // if (!props.show) {
  //   return null;
  // }
  
  // let component;
  // switch (action.type) {
  //   case 'post':
  //     component = <MiddleContainer />;
  //     break;
  //   default:
  //     return null;
  // }
  // return (
  //   <div className="modal-background" onClick={closeModal}>
  //     <div className="modal-child" onClick={e => e.stopPropagation()}>
  //       { component }
  //     </div>
  //   </div>
  // );
}

export default Modal;