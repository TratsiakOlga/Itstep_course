import { useState } from 'react';

function Button({startCount,btnClass, step}) {
    const [count, setCount] = useState(startCount);

    let buttonClass = "btn-danger";

    function handleClick() {
        setCount(count + step);
        //alert('You clicked me!'); - запишем set вместо этой строки
      }

    return(
        <button className={btnClass} onClick={handleClick}>Кнопка нажата {count} раз </button>
        //<button className={buttonClass} onClick={handleClick}>Кнопка нажата {count} раз </button> - изначально было так, когда цвет везде был в обоих кнопках одинаковый
    );
}

export default Button;