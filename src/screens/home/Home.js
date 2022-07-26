import * as React from "react";
import {Fragment} from "react";
import UpComingMovies from "./upcoming-movies/UpComingMovies";
import ReleasedMovies from "./released-movies/ReleasedMovies";
import "./Home.css";

const Home = (props) => {
  return (<Fragment>
    <UpComingMovies baseUrl={props.baseUrl}/>
    <ReleasedMovies baseUrl={props.baseUrl} />
  </Fragment>);
};

export default Home;
