import {useEffect, useState, useRef, useCallback} from "react";

export function Quiz(){
    const [time, setTime] = useState(0);
    var hints = useRef(["ww"]);
    var count = 0;
    const [hint, setHint] = useState("")
    const interval = useRef(null);
    const nowHints = () =>{
        const list= hints.current.map((hint) => 
            <li key={hint}>{hint}</li>
        );
        hints.current.push("ww");
        return list;
        }
    const start = useCallback(() => {
        if(interval.current != null){
            return;
        }
        interval.current = setInterval(() =>{
            setTime(c => c+1);
            count++;
            console.log(count);
            if(count% 5 === 0 && count !== 0){
                setHint(nowHints());
                console.log(hint);
            }
            
        }, 1000);
    }, []);
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
            <button onClick={stop}>stop</button>
            <div className="section">
                <button>tt</button>
                <button>t</button>
            </div>
            <div>
                ヒント(5秒ごとに表示されます)
                <ol>{hint}</ol>
            </div>
        </div>
    );
}