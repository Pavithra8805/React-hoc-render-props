import React from "react";
import HOC from "./HOC";

const LikePost2 = (props) => {
    const { count, handleCount } = props;

    return (
        <div>
            <button onClick={props.handleCount}>Like Post {props.count}</button>
        </div>
    );
};

export default HOC(LikePost2);