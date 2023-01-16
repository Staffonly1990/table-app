import React from 'react';
import { columns, values } from '../../mocks/mock';
import Select from '../select/select';
import Table from '../table/table';
import style from './app.module.css';

function App() {

  return (
    <div className={style.app}>

      <div>

        <Table columns={columns} values={values} />

        <Select columns={columns} />

        <Select columns={columns} />

      </div>

    </div>
  );
}

export default App;