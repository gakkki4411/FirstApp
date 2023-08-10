import {useEffect, useState, useRef, useCallback} from "react";
import {Selections} from "./questions/Selections.js";
import {QuestionsAndHints} from "./questions/QuestionsAndHints.js";

export function Quiz(props){
    const [time, setTime] = useState(0);//制限時間
    const questionsAndHintLists = useRef(QuestionsAndHints(props.number));//ヒントと選択肢のリスト
    var countTime = 0;//時間
    var countHint = 1;//表示するヒントの数
    const [hint, setHint] = useState("")
    const interval = useRef(null);
    
    //現在のヒント
    const nowHints = () =>{
        const list= questionsAndHintLists.current["Hints"].slice(0, countHint).map((hint) => 
            <li key={hint}>{hint}</li>
        );
        countHint++;
        return list;
        }
    
    //タイマースタート
    const start = useCallback(() => {
        if(interval.current != null){
            return;
        }
        interval.current = setInterval(() =>{
            setTime(c => c+1);
            countTime++;
            if(countTime% 5 === 0 || countTime === 1){
                setHint(nowHints());
            }
            
        }, 1000);
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
        <div>
            <time>{time}</time>
            <button onClick={start}>start</button>
            <Selections stop={stop} answer={questionsAndHintLists.current["Answer"]} selections={questionsAndHintLists.current["Selections"]}/>
            <div>
                ヒント(5秒ごとに表示されます)<br/>
                <ol>{hint}</ol>
                <a style={{display:"none"}}>すべてのヒントを表示しました</a>
            </div>
        </div>
    );
}