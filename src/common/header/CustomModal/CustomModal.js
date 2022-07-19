import { AppBar } from "@material-ui/core";
import * as React from "react";

import Modal from "react-modal";
import TabPanel from  '../tabpanel/TabPanel';

import "./CustomModal.css";

const style = {
  content:{
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding:"10px"
  }
};

const CustomModal = (props) => {
  return (  
  
  <AppBar position="static" color="primary" style={{ position: 'fixed'}}>

      <Modal
        ariaHideApp={false}
        isOpen={props.modalIsOpen}
        contentLabel="Login"
        onRequestClose={props.handleClose}
        style={style}
      >
        <TabPanel />
      </Modal>
    </AppBar>
  );
};

export default CustomModal;
