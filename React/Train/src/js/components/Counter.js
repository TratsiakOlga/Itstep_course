import Button from "./Button";
import { useState } from "react";
//redOnly={true} - можно писать вместо onChange={() => {return;}
export default function Counter(){
    const [counter, setCounter] = useState(0);

    const decrement = function(){
        if(counter > 0) {
            setCounter (counter - 1);
        }
    }

    /* Можно так записать вместо (() => setCounter(counter + 1))
    const increment = function(){
        setCounter(counter + 1);
    }
    Вместо +/- можно так написать и стрелочки добавляют и уменьшают значение:
    <input type="number" />
    */

    return (
        <div>
            <Button label="-" handleClick={decrement}/>
            <input type="text" value={counter} onChange={() => {return;}}/> 
            <Button label="+" handleClick={() => setCounter(counter + 1)}/>
        </div>
    )
}

