import React from 'react'

const Score = (props) => {
    const {score} = props;
    return (
        <div>
            <h1 style={{color : "#ffbe4f"}}>Available Balance Rs. {score}</h1>
        </div>
    );
};

export default Score;