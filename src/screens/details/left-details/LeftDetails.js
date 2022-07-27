import * as React from "react";

const LeftDetails = (props) => {
    return (
        <div className="leftDetails">
            <img src={props.movie.poster_url} alt={props.movie.title} />
        </div>

    );
};

export default LeftDetails;
