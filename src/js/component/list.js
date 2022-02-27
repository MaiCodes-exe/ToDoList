import React, { useState } from "react";
import Form from "./form";

function List() {
	const [todos, setTodos] = useState([]);
	const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
	};
	return (
		<div>
			<h1>What's the new task</h1>
			<Form onSubmit={addTodo} />
		</div>
	);
}

export default List;
