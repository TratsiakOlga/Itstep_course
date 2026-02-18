import {useState, useEffect} from 'react';

import H1 from './headers/H1.js';

function uid() {
    return `${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
    const saveTasks = window.localStorage.getItem("tasks");

    const [tasks, setTasks] = useState(saveTasks ? JSON.parse(saveTasks) : []);
    const [text, setText] = useState("");

    function addNewTask(event) {
        event.preventDefault();
        /** Формат объекта, который нужно создать:
         * {id: 1253, text: "Задача 1", status: 0} 0-задача не выполнена, 1 - задача выполнена
         * uid - рандомное присвоение id
         */
        
        const newTasks = [
            ...tasks,
            {id: uid(), text: text, status: false} 
        ];

        setTasks(newTasks);

        setText("");
    }

    function changeStatus(taskId) {
        const newTasks = tasks.map((task) =>{
            if(task.id == taskId){
                task.status = !task.status;
            }

            return task;
        });

        setTasks(newTasks);
    }

    function deleteTask(taskId){
        if(confirm('Вы действительно хотите удалить эту задачу?')) {
            const newTasks = tasks.filter((task) =>{
                return task.id != taskId;   
            });
      
            setTasks(newTasks);
        }      
    }

    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
    <>
        {/*<H1>ToDo</H1> - можно так и тогда нужно в H1 написать children*/}
        <H1 headerText={"ToDo"} />
        <form action="from" onSubmit={addNewTask}>
            <input type="text" placeholder="Новая задача..." value={text} onChange={ (e) => setText(e.target.value) } /> 
            <button type="submit">Добавить</button>
        </form>
        {
            tasks.length > 0 ? 
            <ul className="list">
                        {
                            tasks.map(function(task){
                                return (
                                    <li className="item" key={task.id}>
                                    <input type="checkbox" checked={task.status} value="1" onChange={ () => {changeStatus(task.id)}} />
                                        <span className={task.status ? "done" : null}>{task.text}</span>
                                        <button onClick={() => {deleteTask(task.id)}}>&#10060;</button>
                                    </li>
                                )
                            }
                        )
                    }
                </ul> : "Список задач пустой"
            }   
        </>
    );
}