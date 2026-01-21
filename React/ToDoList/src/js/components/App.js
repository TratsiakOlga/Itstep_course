import {useState} from 'react';

import H1 from '.headers/H1';

function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
    const [tasks, serTasks] = useState([]);
    const [text, serText] = useState("");

    function addNewTask(event) {
        event.preventDefault();
        /** Формат объекта, который нужно создать:
         * {id: 1253, text: "Задача 1", status: 0} 0-задача не выполнена, 1 - задача выполнена
         * uid - рандомное присвоение id
         */
        
        const newTasks = [
            ...tasks,
            {id: uid(), text: text, status: 0} 
        ];

        setTasks(newTasks);

    }

    return (
    <>
        {/*<H1>ToDo</H1> - можно так и тогда нужно в H1 написать children*/}
        <H1 headerText={"ToDo"} />
        <form action="from" onSubmit={addNewTask}>
            <input type="text" placeholder="Новая задача..." onChange={ (e) => setText(e.target.value) } /> 
            <button type="submit">Добавить</button>
        </form>
        <ul class="list">
            {
                tasks.map(function(task){
                    return (
                        <li class="item">
                            <input type="checkbox" checked value="1" />
                            <span class="done">Задача 1</span>
                            <button>&times;</button>
                        </li>
                        )
                    }
                )
            }
        </ul>
    </>
    );
}