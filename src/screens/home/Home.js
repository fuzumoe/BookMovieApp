import * as React from "react";
import {Fragment} from "react";
import UpComingMovies from "./upcoming-movies/UpComingMovies";

const Home = (props) => {
  return (<Fragment>
    <UpComingMovies baseUrl={props.baseUrl}/>
  </Fragment>);
};

export default Home;
