/// <reference path = "../../globals.d.ts" />

import {createRoot} from 'react-dom/client';
import Table from './components/Table';

const tableElement: HTMLElement = document.getElementById("table");

const root: any = createRoot(tableElement);

const products: Array<Product> = [
    {id: 1, name: 'Товар1', count: 5, price: 125},
    {id: 2, name: 'Товар2', count: 20, price: 12},
    {id: 3, name: 'Товар3', count: 2, price: 31},
    {id: 4, name: 'Товар4', count: 8, price: 13},
    {id: 5, name: 'Товар5', count: 10, price: 7},
    {id: 6, name: 'Товар6', count: 11, price: 60},
    {id: 7, name: 'Товар7', count: 19, price: 123},
    {id: 8, name: 'Товар8', count: 125, price: 150},
    {id: 9, name: 'Товар9', count: 5, price: 180},
    {id: 10, name: 'Товар10', count: 7, price: 18},
    {id: 11, name: 'Товар11', count: 2, price: 121},
    {id: 12, name: 'Товар12', count: 1, price: 1583},
    {id: 13, name: 'Товар13', count: 35, price: 652},
    {id: 14, name: 'Товар14', count: 40, price: 2},
    {id: 15, name: 'Товар15', count: 25, price: 8},
    {id: 16, name: 'Товар16', count: 21, price: 15},
    {id: 17, name: 'Товар17', count: 15, price: 36},
    {id: 18, name: 'Товар18', count: 18, price: 48},
    {id: 19, name: 'Товар19', count: 17, price: 59},
    {id: 20, name: 'Товар20', count: 41, price: 45}
  ];

root.render(<Table products={products} />);