/*import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

export default function LoginForm(){
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput type="email" onChange={(event) => {setEmail(event.target.value)}} />
            <TextInput type="password" />
            <Button label="Login" />
        </form>
    )
}*/
//Можно сделать проще:
import TextInput from "./TextInput";
import Button from "./Button";

export default function LoginForm(){
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        console.log(event.target.elements[0].value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput type="email" />
            <TextInput type="password" />
            <Button label="Login" />
        </form>
    )
}