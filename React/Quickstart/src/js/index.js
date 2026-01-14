import '../scss/index.scss';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import AboutPage from './components/AboutPage';
import ToDoList from './components/ToDoList'


const appElement = document.getElementById('app');
const newAppElement = document.getElementById('app-2');
const newAppElements = document.getElementById('app-3');

const root = createRoot(appElement);
const newRoot = createRoot(newAppElement);
const twoRoot = createRoot(newAppElements);


root.render(<App />);
newRoot.render(<AboutPage />);
twoRoot.render(<ToDoList />);