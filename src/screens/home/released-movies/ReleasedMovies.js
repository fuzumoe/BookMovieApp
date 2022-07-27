import React from "react";
import {useState, useEffect} from "react";
import {withStyles} from '@material-ui/core/styles';
import {  withRouter } from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FindMoviesForm from "../find-movies-form/FindMoviesForm";


const styles = theme => ({
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});

const ReleasedMovies = (props) => {
    const {classes} = props;
    const [releasedMovies, setReleasedMovies] = useState([])

    useEffect(() => {
        const baseUrl = `${props.baseUrl}movies?status=RELEASED`;
        const header = new Headers();

        header.append("Accept", " application/json");
        header.append("Content-Type", "application/json;charset=UTF-8");
        const fetchData = async () => {
            const rawResponse = await fetch(baseUrl, {method: 'GET', headers: header,});
            const result = await rawResponse.json();
            setReleasedMovies(result["movies"]);
        }

        fetchData().catch(console.error);
    }, [])

    const getFilterQueryFromForm = (formData) => {
        let queryString = "status=RELEASED"

        for (const key in formData) {
            if ((key === 'artists' || key === 'genres') && formData[key].value.length > 0){
                console.log((key === 'artists' || key === 'genres') )
                queryString += `&${key}=` + formData[key].value.toString();
            }
            if ((key !== 'artists' && key !== 'genres') && formData[key].value !== "")
                queryString += `&${key}=` + formData[key].value;
        }
        return queryString;
    }
    const filterHandler = (formData) => {
        const filters = getFilterQueryFromForm(formData);
        console.log(filters)
        const baseUrl = `${props.baseUrl}movies?${filters}`;
        const header = new Headers();

        header.append("Accept", " application/json");
        header.append("Content-Type", "application/json;charset=UTF-8");
        const fetchData = async () => {
            const rawResponse = await fetch(baseUrl, {method: 'GET', headers: header,});
            const result = await rawResponse.json();
            setReleasedMovies(result["movies"]);
        }
        fetchData().catch(console.error);

    }

    const movieClickHandler = (movieId) => {
        props.history.push('/movie/' + movieId)
    }
    return (
        <section>
            <div className="flex-container">
                <div className="left">
                    <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                        {releasedMovies.map(movie => (
                            <GridListTile onClick={() => movieClickHandler(movie.id)}
                                          className="released-movie-grid-item" key={"grid" + movie.id}>
                                <img src={movie.poster_url} className="poster" alt={movie.title}/>
                                <GridListTileBar
                                    title={movie.title}
                                    subtitle={
                                        <span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <div className="right">

                    <FindMoviesForm baseUrl={props.baseUrl} filterHandler={filterHandler}/>

                </div>
            </div>
        </section>
    )
}

export default withStyles(styles)(withRouter(ReleasedMovies));
