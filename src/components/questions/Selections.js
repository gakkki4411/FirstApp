import {useEffect, useState, useRef, useCallback} from "react";

export function Selections(props){
    function isCorrect(number){
        if(number === props.answer){
            console.log("Correct");
        }
        else{
            console.log("Wrong");
        }
    };
    return(
        <div className="selection">
            <a>{props.selections}</a><br/>
            
                <button onClick={() => {
                    props.stop();
                    isCorrect(1);
                }}>1</button>
                <button onClick={() => {
                    props.stop();
                    isCorrect(2);
                }}>2</button>
                <button onClick={() => {
                    props.stop();
                    isCorrect(3);
                }}>3</button>
                <button onClick={() => {
                    props.stop();
                    isCorrect(4);
                }}>4</button>
            </div>
    );
}