// import React from "react";
import { useState } from "react";

const Button = (props) => {
    const {score, text, setScore, setText} = props;
    const [chosenAmt, setChosenAmt] = useState(0);
    const [warning, setWarning] = useState("");
    return (
        <div>
            <button onClick={
                () => {
                    const num = Math.floor(Math.random() * 11) + 2;
                    if(chosenAmt <= 0){
                        setText("Betting amount must be positive.");
                    }
                    else if(chosenAmt > score){
                        setText("Betting amount exceeds balance.");
                    }
                    else if(num < 7){
                        setText("You Won!!!, the number was " + num.toString());
                        setScore(Number(score) + Number(chosenAmt));
                    }
                    else{
                        setText("You Lost !!!,  the number was " + num.toString());
                        setScore(Number(score) - Number(chosenAmt));
                    }
                }
            }>7 Down</button><br></br>
            <button onClick={
                () => {
                    const num = Math.floor(Math.random() * 11) + 2;
                    if(chosenAmt <= 0){
                        setText("Betting amount must be positive.");
                    }
                    else if(chosenAmt > score){
                        setText("Betting amount exceeds balance.");
                    }
                    else if(num === 7){
                        setText("You Won!!!, the number was " + num.toString());
                        setScore(Number(score) + Number(chosenAmt));
                    }
                    else{
                        setText("You Lost !!!,  the number was " + num.toString());
                        setScore(Number(score) - Number(chosenAmt));
                    }
                }
            }>Lucky 7</button><br></br>
            <button onClick={
                () => {
                    const num = Math.floor(Math.random() * 11) + 2;
                    if(chosenAmt <= 0){
                        setText("Betting amount must be positive.");
                    }
                    else if(chosenAmt > score){
                        setText("Betting amount exceeds balance.");
                    }
                    else if(num > 7){
                        setText("You Won!!!, the number was " + num.toString());
                        setScore(Number(score) + Number(chosenAmt));
                    }
                    else{
                        setText("You Lost !!!,  the number was " + num.toString());
                        setScore(Number(score) - Number(chosenAmt));
                    }
                }
            }>7 Up</button><br></br>
            <button onClick={
                () => {
                    setText("Guess the Number...");
                }
            }>Play Again</button><br></br>
            <button onClick={() => {
                setText("Guess the Number...");
                setScore(150);
            }}>Reset Balance</button><br></br>
            <button onClick={() => {
                if(chosenAmt <= 0){
                    setText("Betting Amount must be greater than zero...")
                }
                else{
                    setText("Betting Amount Set : Rs." + chosenAmt.toString());
                }
            }} >Set Betting Amount</button><br></br>
            <input type="number" onChange={(e) => {
                if(e.target.value <= 0){
                    setWarning("Betting amount should be greater than zero.");
                }
                else if(e.target.value > score){
                    setWarning("Betting amount must be within your available balance.");
                }
                else{
                    setChosenAmt(e.target.value);
                    setWarning("");
                }
            }}/>
            <h4 style={{color : "#ffbe4f"}}>Current Betting Amount: {chosenAmt}</h4>
            <h4>{warning}</h4>
        </div>
    )
};

export default Button;