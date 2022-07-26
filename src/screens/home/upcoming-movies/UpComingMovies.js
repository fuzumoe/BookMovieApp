import React from "react";
import {useState, useEffect} from "react";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import "./UpComingMovies.css";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem',
        width: '100%'
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});

const UpComingMovies = (props) => {
    const { classes } = props;
    const [upComingMovies, setUpComingMovies] = useState([])
    useEffect(() => {
        const baseUrl = `${props.baseUrl}movies?status=PUBLISHED`;
        const header = new Headers();

        header.append("Accept", " application/json");
        header.append("Content-Type", "application/json;charset=UTF-8");
        const fetchData = async () => {
            const rawResponse = await fetch(baseUrl, {method: 'GET', headers: header,});
            const result = await rawResponse.json();
            setUpComingMovies(result["movies"]);
        }
        fetchData().catch(console.error);
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.upcomingMoviesHeading}>
                <span>Upcoming Movies</span>
            </div>
            <div></div>
            <GridList cols={6} cellHeight={250}	 className={classes.gridList} >
                {upComingMovies.map(movie => (
                    <GridListTile key={"upcoming" + movie.id}>
                        <img src={movie.poster_url} className="poster" alt={movie.title}/>
                        <GridListTileBar title={movie.title}/>
                    </GridListTile>
                ))}
            </GridList>

        </div>

    )
}

export default withStyles(styles)(UpComingMovies);
