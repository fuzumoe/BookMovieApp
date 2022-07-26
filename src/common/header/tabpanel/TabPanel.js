import React from "react";
import { useState, Fragment } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Login  from '../login/Login';
import Register from '../register/Register';

import "./TabPanel.css";

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const TabPanel = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, value) => {
    setActiveTab(value);
  };

  return (
    <Fragment>
      <Tabs
        className="tabs"
        value={activeTab}
        onChange={handleChange}
      >
        <Tab label="Login" />
        <Tab label="Register" />
      </Tabs>

      {activeTab === 0 && <TabContainer><Login baseUrl={props.baseUrl} /></TabContainer>}
      {activeTab === 1 && <TabContainer><Register baseUrl={props.baseUrl} /></TabContainer>}
    </Fragment>
  );
};

export default TabPanel;
