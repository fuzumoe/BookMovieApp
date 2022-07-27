import * as React from "react";
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
import Header from '../../common/header/Header';

import './Details.css';
const Details = (props) => {
  return (
      <div className="details">
        <Header id={props.match.params.id} baseUrl={props.baseUrl} showBookShowButton="true" />
        <div className="back">
          <Typography>
            <Link to="/">  &#60; Back to Home</Link>
          </Typography>
        </div>
      </div>
  );
};

export default Details;
