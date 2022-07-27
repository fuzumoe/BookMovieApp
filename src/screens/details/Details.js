import React, {useState} from "react";
import {Link} from 'react-router-dom';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Header from '../../common/header/Header';

import './Details.css';

const initStarRateIcons = [
    {
        id: 1,
        stateId: "star-1",
        color: "black-star"
    },
    {
        id: 2,
        stateId: "star-2",
        color: "black-star"
    },
    {
        id: 3,
        stateId: "star-3",
        color: "black-star"
    },
    {
        id: 4,
        stateId: "star-4",
        color: "black-star"
    },
    {
        id: 5,
        stateId: "star-5",
        color: "black-star"
    }];
const yTubeFrameOpts = {
    height: '300',
    width: '700',
    playerVars: {
        autoplay: 1
    }
}
const Details = (props) => {
    const movie = props.location.state.movie;
    const [starRateIcons, setStarRateIcons] = useState(initStarRateIcons)

    const rateMovie = (starId) => {
        let newStarRateIcons = [];
        for (let star of starRateIcons) {
            let newStarRateIcon = star;
            if (star.id <= starId)
                newStarRateIcon.color = "yellow-star"
            else
                newStarRateIcon.color = "black-star";

            newStarRateIcons.push(newStarRateIcon);
        }
        setStarRateIcons(newStarRateIcons);

    }
    return (
        <div className="details">
            <Header id={props.match.params.id} baseUrl={props.baseUrl} showBookShowButton="true"/>
            <div className="back">
                <Typography>
                    <Link to="/">  &#60; Back to Home</Link>
                </Typography>
            </div>
            <div className="flex-details-container">
                <div className="left-details-container">
                    <img className="details-poster" src={movie.poster_url} alt={movie.title}/>
                </div>
                <div className="middle-details-container">
                    <div>
                        <Typography variant="headline" component="h2">{movie.title} </Typography>
                    </div>
                    <br/>
                    <div>
                        <Typography>
                            <span className="bold-text">Genres: </span> {movie.genres.join(', ')}
                        </Typography>
                    </div>
                    <div>
                        <Typography><span className="bold-text">Duration:</span> {movie.duration} </Typography>
                    </div>
                    <div>
                        <Typography><span
                            className="bold-text">Release Date:</span> {new Date(movie.release_date).toDateString()}
                        </Typography>
                    </div>
                    <div>
                        <Typography><span className="bold-text"> Rating:</span> {movie.critics_rating}  </Typography>
                    </div>
                    <div className="m-top-16">
                        <Typography><span className="bold-text">Plot:</span> <a href={movie.wiki_url}>(Wiki
                            Link)</a> {movie.storyline} </Typography>
                    </div>
                    <div className="trailer-container">
                        <Typography>
                            <span className="bold-text">Trailer:</span>
                        </Typography>
                        <YouTube
                            videoId={movie.trailer_url.split("?v=")[1]}
                            opts={yTubeFrameOpts}
                            onReady={this._onReady}
                        />
                    </div>
                </div>
                <div className="right-details-container">
                    <Typography>
                        <span className="bold">Rate this movie: </span>
                    </Typography>
                    {starRateIcons.map(star => (
                        <StarBorderIcon
                            className={star.color}
                            key={"star" + star.id}
                            onClick={() => rateMovie(star.id)}
                        />
                    ))}
                    <div className="bold marginBottom16 marginTop16">
                        <Typography>
                            <span className="bold">Artists:</span>
                        </Typography>
                    </div>
                    <div className="paddingRight">
                        <GridList cellHeight={160} cols={2}>
                            {movie.artists != null && movie.artists.map(artist => (
                                <GridListTile
                                    className="gridTile"
                                    onClick={() => this.artistClickHandler(artist.wiki_url)}
                                    key={artist.id}>
                                    <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                    <GridListTileBar
                                        title={artist.first_name + " " + artist.last_name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
