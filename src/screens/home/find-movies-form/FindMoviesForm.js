import React  from "react";
import {useState, useEffect, Fragment} from "react";
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
const initialFormDataState = {
    title: {
        value: "",
    },
    genres: {
        value: [],
    },
    artists: {
        value: [],
    },
    start_date: {
        value: "",
    },
    end_date: {
        value: "",
    },
};
const FindMoviesForm = (props) => {

    const {classes} = props;
    const [findFormData, setFindFormData] = useState(initialFormDataState);
    const [genres, setGenres] = useState([]);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const header = new Headers();

        header.append("Accept", " application/json");
        header.append("Content-Type", "application/json;charset=UTF-8");

        const fetchGenresData = async () => {
            const rawResponse = await fetch(`${props.baseUrl}genres`, {method: 'GET', headers: header,});
            const result = await rawResponse.json();
            setGenres(result["genres"]);
        }
        fetchGenresData().catch(console.error);


        const fetchArtistData = async () => {
            const rawResponse = await fetch(`${props.baseUrl}artists`, {method: 'GET', headers: header,});
            const result = await rawResponse.json();
            setArtists(result["artists"]);
        }
        fetchArtistData().catch(console.error);

    }, [])

    const inputOnChangeAndOnBlurHandler = (event) => {
        setFindFormData({
            ...findFormData,
            [event.target.name]: {
              value: event.target.value
            },

        });
    };

    return (


        <Fragment>

        <FormControl className={classes.formControl}>
                <Typography className={classes.title} color="textSecondary">
                    FIND MOVIES BY:
                </Typography>
            </FormControl>
            <br/>
            <br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                <Input
                    id="title"
                    name="title"
                    value={findFormData.title.value}
                    onChange={inputOnChangeAndOnBlurHandler}
                />
            </FormControl>
            <br/>
            <br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                <Select
                    multiple
                    input={<Input id="select-multiple-checkbox-genre"/>}
                    renderValue={selected => selected.join(',')}
                    name="genres"
                    value={findFormData.genres.value}
                    onChange={inputOnChangeAndOnBlurHandler}
                >
                    {genres.map(genre => (
                        <MenuItem key={genre.id} value={genre.genre}>
                            <Checkbox checked={genres.indexOf(genre.genre) > -1}/>
                            <ListItemText primary={genre.genre}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <br/>
            <br/>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                <Select
                    multiple
                    input={<Input id="select-multiple-checkbox"/>}
                    renderValue={selected => selected.join(',')}
                    name="artists"
                    value={findFormData.artists.value}
                    onChange={inputOnChangeAndOnBlurHandler}
                >
                    {artists.map(artist => (
                        <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                            <Checkbox
                                checked={artists.indexOf(artist.first_name + " " + artist.last_name) > -1}/>
                            <ListItemText primary={artist.first_name + " " + artist.last_name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <br/>
            <br/>
            <FormControl className={classes.formControl}>
                <TextField
                    id="releaseDateStart"
                    label="Release Date Start"
                    type="date"
                    defaultValue=""
                    name="start_date"
                    value={findFormData.start_date.value}
                    onChange={inputOnChangeAndOnBlurHandler}
                    InputLabelProps={{shrink: true}}
                />
            </FormControl>

            <br/>
            <br/>
            <FormControl className={classes.formControl}>
                <TextField
                    id="releaseDateEnd"
                    label="Release Date End"
                    type="date"
                    defaultValue=""
                    name="end_date"
                    InputLabelProps={{shrink: true}}
                    value={findFormData.end_date.value}
                    onChange={inputOnChangeAndOnBlurHandler}
                />
            </FormControl>

            <br/>
            <br/>
            <FormControl className={classes.formControl}>
                <Button onClick={() => props.filterHandler(findFormData)} variant="contained" color="primary">
                    APPLY
                </Button>
            </FormControl>

        </Fragment>
    )
}


export default withStyles(styles)(FindMoviesForm)
