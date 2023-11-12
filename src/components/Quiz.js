import {useEffect, useState, useRef, useCallback} from "react";
import {Selections} from "./questions/Selections.js";
import {NumberOfQuestion} from "./questions/QuestionsAndHints.js";
import React from "react";
import '../index.css';
export function Quiz(props){
    const [time, setTime] = useState(0);//かかった時間
    var countTime = 0;//時間
    var countHint = useRef(0);//表示するヒントの数
    const interval = useRef(null);
    const list= props.hints.slice(0, countHint.current).map((hint) => 
                <li key={hint}>{hint}</li>);//表示するヒントのリスト
    const [selection ,setSelection] = useState();
    //タイマースタート
    const start = useCallback(() => {
        if(props.number-1 >= NumberOfQuestion()){
            return;
        }
        if(interval.current != null){
            return;
        }
        interval.current = setInterval(() =>{
            setTime(c => (c+10));
            countTime++;
            if(countTime% 5 === 0 || countTime === 1){
                countHint.current++;
            }
        }, 10);
    }, []);

    //タイマーストップ
    const stop = useCallback(() =>{
        if(interval.current == null){
            return;
        }
        clearInterval(interval.current);
        interval.current = null;
    }, []);
    return(
        <div className="home">
            <time>{time/1000}</time>秒
            <button onClick={() => {
                start();
                setSelection(<Selections stop={stop} answer={props.answer} selections={props.selection}/>);
            }}>start</button>
            <div>{selection}</div>
            <div>
                ヒント!(5秒ごとに表示されます)<br/>
                <ol className="hint">{list}</ol>
            </div>
        </div>
    );
}