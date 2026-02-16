import '../scss/expenses.scss';

import {createRoot} from 'react-dom/client';

import App from './components/App.js';

let element = document.querySelector(".expenses");

let rootElement = createRoot(element);  

rootElement.render(<App/>);