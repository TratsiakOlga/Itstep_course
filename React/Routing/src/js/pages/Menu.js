import { NavLink } from "react-router-dom";

export default function Menu({links}){
    let hrefs = links.map(function(link){
        return <NavLink to={link.path} className={({ isActive }) =>(isActive ? "active" : "")}>{link.title}</NavLink>;
    });
        //Когда нет NavLink строчка выклядела бы так: return <a href={link.path}>{link.title}</a>;
    

    return(<nav className="main-menu">
        {hrefs}
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")} >Портфолио</NavLink>
        </nav>);
}
/* Было изначально, до переписывания:
    return (
        <nav className="main-menu">
            <a href="/">Главная</a>
            <a href="/about">О нас</a>
            <a href="/catalog">Каталог</a>
        </nav>
    );
}*/