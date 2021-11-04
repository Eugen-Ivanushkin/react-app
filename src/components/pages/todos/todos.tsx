import React from 'react';

import 'regenerator-runtime/runtime';

//components
import Title from '../../commons/title';
import AddForm from '../../commons/add-form';
import TodoList from '../../commons/todo-list';
import TodoOptions from '../../commons/todo-options';

// Options
import { Option } from '../../../const/predicates';

//stylea
//@ts-ignore
import style from './style.module.css';

const Todos = () => {
  return (
    <div className={style.todos}>
      <Title title="Todos" />
      <div className={style.main}>
        <AddForm />
        <TodoList />
        <TodoOptions filters={[Option.ALL, Option.ACTIVE, Option.COMPLETED]} />
      </div>
    </div>
  );
};

export default Todos;
