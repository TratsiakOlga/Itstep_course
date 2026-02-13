import '../scss/catalog.scss';

import {createRoot} from 'react-dom/client';

import Catalog from './components/Catalog.js';

let element = document.querySelector(".catalog");

let rootElement = createRoot(element);

rootElement.render(<Catalog />);