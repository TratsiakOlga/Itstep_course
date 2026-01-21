import '../scss/todo.scss';

import {createRoot} from 'react-dom/client';

import App from './components/App.js';

let element = document.querySelector(".todo");

let rootElement = createRoot(element);  

rootElement.render(<App/>);