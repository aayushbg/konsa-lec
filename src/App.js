import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Score from "./components/Score"
import Button from "./components/Button"
import Display from "./components/Display"

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    const [score, setScore] = useState(150);
    const [text, setText] = useState("Guess the Number...");

    return (
        <div className="container">
            <div className="heading" style={{backgroundColor : "white"}}>
                <h1>7-Up 7-Down Game</h1>
            </div>
            <Score score={score} text={text} setScore = {setScore} setText={setText} />
            <Display score={score} text={text} setScore = {setScore} setText={setText} />
            <Button score={score} text={text} setScore = {setScore} setText={setText} />
        </div>
    );
};

root.render(<AppLayout />)