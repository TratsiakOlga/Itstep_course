import {loremIpsum} from 'lorem-ipsum';

export default function Catalog(){
    return (
        <>
            <h1>Каталог</h1>
            <p>{loremIpsum({count: 5})}</p>
        </>
    )
}