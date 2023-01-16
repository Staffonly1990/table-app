import React, { useRef, FC } from 'react';
import { IColumn } from '../../interfaces/interfaces';
import style from './table.module.css';

interface ITable {
    columns: IColumn[];
    values: any[];
}

const Table: FC<ITable> = ({ columns, values }) => {

    return (
        <div style={{ gridTemplateColumns: `repeat(${columns.length}, max-content)` }} className={style.table}>

            {columns.map(({ title }) => <div className={style.cell}>{title}</div>)}

            {
                values.map(value =>
                    columns.map(({ key }) =>
                        <div className={style.cell}>{value[key]}</div>))
            }

        </div>
    );
}

export default Table;