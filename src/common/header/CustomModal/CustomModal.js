import React  from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "react-modal";
import {AppBar}  from "@material-ui/core";
import TabPanel from  '../tabpanel/TabPanel';
import {OPEN_MODAL} from "../../../reducers/authReducer";

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
  const dispatch = useDispatch();
  const openModal = useSelector((state) => state.openModal);

  const modalCloseHandler = (event) => {
    dispatch({type: OPEN_MODAL, payload: false});
  };
  return (

  <AppBar position="static" color="primary" style={{ position: 'fixed'}}>

      <Modal
        ariaHideApp={false}
        isOpen={openModal}
        contentLabel="Login"
        onRequestClose={modalCloseHandler}
        style={style}
      >
        <TabPanel baseUrl={props.baseUrl} />
      </Modal>
    </AppBar>
  );
};

export default CustomModal;
