import {useEffect, useState, useRef, useCallback} from "react";
export function Selections(props){
    const [T, setT] = useState("");
    function isCorrect(number){
        if(T != ""){//何回も回答できないようにする
            return;
        }
        if(number == props.answer){
            setT("正解");
            console.log("o");
        }
        else{
            setT("不正解 正解は" + props.answer);
            console.log("x");
            console.log(props.answer);
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
                <br/>
                <p>{T}</p>
            </div>
    );
}