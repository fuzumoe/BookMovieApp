import React, {Fragment} from "react";
import {useState, useEffect} from "react";
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import FindMoviesForm from "../find-movies-form/FindMoviesForm";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
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
            if ((key === 'artists' || key === 'genres') && formData[key].length > 0)
                queryString += `&${key}=` + formData[key].value.toString();
            if ((key !== 'artists' && key !== 'genres') && formData[key].value !== "")
                queryString += `&${key}=` + formData[key].value;
        }
        return queryString;
    }
    const filterHandler = (formData) => {
        const filters = getFilterQueryFromForm(formData);
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
        console.log("not yet implemented")
    }
    return (
        <Fragment className={classes.root}>
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
                    <Card>
                        <CardContent>
                            <FindMoviesForm baseUrl={props.baseUrl} filterHandler={filterHandler}/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Fragment>
    )
}


export default withStyles(styles)(ReleasedMovies)
