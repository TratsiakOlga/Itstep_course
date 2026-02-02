import {loremIpsum} from 'lorem-ipsum';

export default function Main(){
    return (
        <>
            <h1>Главная</h1>
            <p>{loremIpsum({count: 5})}</p>
        </>
    );
}