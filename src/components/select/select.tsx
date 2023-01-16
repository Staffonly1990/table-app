import React, { useRef, FC } from 'react';
import { IColumn } from '../../interfaces/interfaces';
import style from './select.module.css';

interface ISelect {
    columns: IColumn[];
}


const Select: FC<ISelect> = ({ columns }) => {

    return (
        <select>
            <option disabled>Выбрать</option>
            {
                columns.map(({ title, key }) => {
                    if (key === 'date') return
                    return <option value={key}>{title}</option>
                })
            }
        </select>
    );
}

export default Select;