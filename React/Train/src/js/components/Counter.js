import Button from "./Button";
import { useState } from "react";

export default function Counter(){

    return (
        <div>
            <Button label="-"/>
            <input type="text"/>
            <Button label="+"/>
        </div>
    )
}

