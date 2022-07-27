import * as React from "react";
import {Fragment} from "react";
import UpComingMovies from "./upcoming-movies/UpComingMovies";
import ReleasedMovies from "./released-movies/ReleasedMovies";
import "./Home.css";
import Header from "../../common/header/Header";

const Home = (props) => {
  return (<Fragment>

    <Header baseUrl={props.baseUrl} showBookShowButton={false}></Header>
    <UpComingMovies baseUrl={props.baseUrl}/>
    <ReleasedMovies baseUrl={props.baseUrl} />
  </Fragment>);
};

export default Home;
