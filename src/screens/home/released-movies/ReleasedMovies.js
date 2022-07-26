import React from "react";
import {useState, useEffect} from "react";
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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


    return (
        <div className={classes.root}>
            <div className="container">
                <div className="left">
                    <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                        {releasedMovies.map(movie => (
                            <GridListTile
                                          className="released-movie-grid-item" key={"grid" + movie.id}>
                                <img src={movie.poster_url} className="movie-poster" alt={movie.title}/>
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

                </div>
            </div>
        </div>
    )
}


export default withStyles(styles)(ReleasedMovies)
