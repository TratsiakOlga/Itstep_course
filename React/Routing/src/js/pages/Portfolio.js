import {loremIpsum} from 'lorem-ipsum';
import { Outlet } from 'react-router-dom';

export default function Portfolio(){
    return (
        <>
            <h1>Портфолио</h1>
            <p>{loremIpsum({count: 5})}</p>
            <Outlet />
        </>
    );
}