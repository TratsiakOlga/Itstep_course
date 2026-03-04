import {useState} from 'react';

const PER_PAGES = 10;

export default function Table({products}) {
    const [items, setItems] = useState(products.slice(0, 9));
    const [pages, setPagesCount] = useState(Math(products.length / PER_PAGES));


    return ( <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Название товара</th>
                    <th>Количество</th>
                    <th>Цена за единицу</th>
                </tr>
                </thead>
                <tbody>
                {
                    (items.length > 0) ? items.map((item) => {
                        return <tr>
                            <th>{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>{item.price}</td>
                        </tr>
                 }) : <tr><td colspan="4">Таблица пока пустая</td></tr>
                }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">
                            <div className = 'nav'></div>
                        </td>
                    </tr>
                </tfoot>
            </table>
    );
