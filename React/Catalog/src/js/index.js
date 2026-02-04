import '../scss/index.scss';
import { createRoot } from 'react-dom/client';
import App from './addProduct/App';
import ProductFotm from './addProduct/ProductForm';

const appElement = document.getElementById('app');
const newAppElement = document.getElementById('app-2');


const root = createRoot(appElement);
const newRoot = createRoot(newAppElement);

root.render(<App />);
newRoot.render(<ProductFotm />);