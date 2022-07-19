import * as React from "react"; 

import Modal from 'react-modal';
import TabPanel from '../../tabpanel/TabPanel';
const style = {
  top: "50%",
  left: "50%",
  right: "auto",
  bottom: "auto",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={props.modalIsOpen}
        contentLabel="Login"
        onRequestClose={props.handleClose}
        style={style}
      >
        <TabPanel/>
        
      </Modal>
    </div>
  );
}
